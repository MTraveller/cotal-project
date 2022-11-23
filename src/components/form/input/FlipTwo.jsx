import React from 'react';

import { Input } from '../../form/input/Input';
import { InputEditButton } from '../../form/InputEditButton';
import { handleEditSaveFlip } from '../../../utils/handleEditSaveFlip';

export const FlipTwo = ({
  divHeight,
  paragraphHight,
  text,
  link,
  inputId,
  inputName,
  inputType,
  inputValue,
  inputAutocomplete,
  inputBorderRadius,
  inputPadding,
  inputPlaceholder,
  onChange,
  dataMsg,
}) => (
  <div className={`flex justify-between items-center ${divHeight}`}>
    <p className={`flex ${paragraphHight} items-center gap-3`}>
      {text}:{` `}
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {inputValue}
        </a>
      ) : (
        <span>{inputValue}</span>
      )}
    </p>
    <span name={inputName} className="hidden w-3/4">
      <Input
        id={inputId}
        name={inputName}
        type={inputType}
        value={inputValue}
        autoComplete={inputAutocomplete}
        borderRadius={inputBorderRadius}
        padding={inputPadding}
        placeholder={inputPlaceholder}
        onChange={onChange}
      />
    </span>
    <InputEditButton
      handleEditSaveFlip={handleEditSaveFlip}
      dataMsg={dataMsg}
    />
  </div>
);
