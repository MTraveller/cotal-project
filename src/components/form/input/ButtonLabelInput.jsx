import React from 'react';
import { ImageInput } from './ImageInput';
import { handleKeypress } from '../../../utils/handleKeypress';

export const ButtonLabelInput = ({ id, svg, onChange }) => (
  <>
    <button type="button" onKeyDown={handleKeypress}>
      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
        {svg}
        {` `}Change
      </label>
    </button>
    <ImageInput id={id} onChange={onChange} />
  </>
);
