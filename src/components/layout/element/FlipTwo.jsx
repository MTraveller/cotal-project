import React from 'react';

import { Input } from '../../form/input/Input';
import { handleEditSaveFlip } from '../../../utils/handleEditSaveFlip';

export const FlipTwo = ({
  paragraphHight,
  text,
  link,
  spanId,
  inputId,
  inputName,
  inputType,
  inputValue,
  inputAutocomplete,
  inputBorderRadius,
  inputPadding,
  inputPlaceholder,
  onChange,
}) => (
  <div className="flex justify-between items-center">
    <p className={`flex ${paragraphHight} items-center gap-3`}>
      {text}:{` `}
      {link ? (
        <a id={spanId} href={link} target="_blank" rel="noopener noreferrer">
          {inputValue}
        </a>
      ) : (
        <span id={spanId}>{inputValue}</span>
      )}
    </p>
    <span id={inputId} name={inputName} className="hidden w-3/4">
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
    <button type="button" onClick={handleEditSaveFlip}>
      Edit
    </button>
  </div>
);
