import React from 'react';
import { ImageInput } from './ImageInput';
import { handleKeypress } from '../../../utils/handleKeypress';

export const ButtonImageInput = ({ id, preview, alt, svg, onChange }) => (
  <>
    <button type="button" onKeyDown={handleKeypress}>
      <label htmlFor={id} className="cursor-pointer">
        {preview ? (
          <img className="w-32 h-32 rounded-full" src={preview} alt={alt} />
        ) : (
          svg
        )}
      </label>
    </button>
    <ImageInput id={id} onChange={onChange} />
  </>
);
