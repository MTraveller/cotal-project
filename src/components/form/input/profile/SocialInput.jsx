import React from 'react';

import { socialIcon } from '../../../layout/element/socialIcons';
import { Input } from '../Input';
import { handleIconFocus } from '../../../../utils/handleIconFocus';
import { handleIconSaveFlip } from '../../../../utils/handleIconSaveFlip';

export const SocialInput = ({
  divHeight,
  inputId,
  inputType,
  inputAutocomplete,
  inputDisplay,
  inputBorderRadius,
  inputPadding,
  inputPlaceholder,
  socials,
  setSocials,
}) => {
  const handleChange = ({ currentTarget: input }) => {
    setSocials({
      ...socials,
      [input.name]: { username: input.value },
    });
  };

  return (
    <div className={`flex flex-wrap justify-between items-center ${divHeight}`}>
      {socialIcon.map((icon, idx) => (
        <div key={icon.name} id={icon.name} className="flex">
          <button
            type="button"
            id={idx}
            name={icon.name}
            className="flex basis-1/6 justify-center items-center"
            onClick={handleIconFocus}
          >
            {icon.component}
          </button>
          <Input
            key={icon.name}
            id={idx}
            name={icon.name}
            type={inputType}
            dataValue={inputId}
            value={
              socials[icon.name]?.username ? socials[icon.name].username : ``
            }
            autoComplete={inputAutocomplete}
            display={inputDisplay}
            borderRadius={inputBorderRadius}
            padding={inputPadding}
            placeholder={inputPlaceholder}
            onChange={handleChange}
          />
        </div>
      ))}

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
};
