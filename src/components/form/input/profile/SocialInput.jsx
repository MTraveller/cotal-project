import React from 'react';
import {
  SiDeviantart,
  SiDribbble,
  SiGithub,
  SiSoundcloud,
  SiPinterest,
} from 'react-icons/si';

import { Input } from '../Input';
import { handleIconFocus } from '../../../../utils/handleIconFocus';
import { handleIconSaveFlip } from '../../../../utils/handleIconSaveFlip';

const icons = [
  { name: `DeviantArt`, component: <SiDeviantart size={`28px`} /> },
  { name: `Dribble`, component: <SiDribbble size={`28px`} /> },
  { name: `GitHub`, component: <SiGithub size={`28px`} /> },
  { name: `SoundCloud`, component: <SiSoundcloud size={`28px`} /> },
  { name: `Pinterest`, component: <SiPinterest size={`28px`} /> },
];

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
      {icons.map((icon, idx) => (
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
