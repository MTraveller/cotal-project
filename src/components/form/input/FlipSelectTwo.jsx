import React from 'react';

import SelectInput from './profile/StatusInput';
import { InputEditButton } from '../InputEditButton';
import { handleEditSaveFlip } from '../../../utils/handleEditSaveFlip';

export const FlipSelectTwo = ({
  divHeight,
  inputText,
  spanId,
  inputValue,
  onChange,
  dataMsg,
}) => (
  <div className={`flex justify-between items-center ${divHeight}`}>
    <p className="flex items-center gap-3">
      {inputText}:{` `}
      <span>{inputValue}</span>
    </p>
    <span name={spanId} className="hidden w-3/4">
      <SelectInput value={inputValue} onChange={onChange} />
    </span>
    <InputEditButton
      handleEditSaveFlip={handleEditSaveFlip}
      dataMsg={dataMsg}
    />
  </div>
);
