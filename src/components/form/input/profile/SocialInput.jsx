import React from 'react';
import {
  SiDeviantart,
  SiDribbble,
  SiGithub,
  SiSoundcloud,
  SiPinterest,
} from 'react-icons/si';
import { handleIconFocus } from '../../../../utils/handleIconFocus';
import { Input } from '../Input';

const icons = [
  <SiDeviantart size={`28px`} />,
  <SiDribbble size={`28px`} />,
  <SiGithub size={`28px`} />,
  <SiSoundcloud size={`28px`} />,
  <SiPinterest size={`28px`} />,
];

export const SocialInput = ({
  buttonsHight,
  socials,
  spanId,
  inputId,
  inputName,
  inputType,
  inputValue,
  inputAutocomplete,
  inputDisplay,
  inputBorderRadius,
  inputPadding,
  inputPlaceholder,
  onChange,
}) => (
  <div className="flex flex-wrap justify-between items-center">
    {icons.map((item, idx) => {
      return (
        <div key={idx} id={idx} className="flex">
          <button
            type="button"
            key={idx}
            id={idx}
            className={`flex basis-1/6 justify-center items-center ${buttonsHight}`}
            onClick={handleIconFocus}
          >
            {item}
          </button>
          <Input
            id={inputId}
            name={inputName}
            type={inputType}
            value={inputValue}
            autoComplete={inputAutocomplete}
            display={inputDisplay}
            borderRadius={inputBorderRadius}
            padding={inputPadding}
            placeholder={inputPlaceholder}
            onChange={onChange}
          />
        </div>
      );
    })}

    <button
      id="icon-save-button"
      type="button"
      className="hidden"
      onClick={handleIconSaveFlip}
    >
      Save
    </button>
  </div>
);
