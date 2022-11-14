import React, { useState, useEffect } from 'react';
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
  buttonsHeight,
  inputId,
  inputType,
  inputValue,
  inputAutocomplete,
  inputDisplay,
  inputBorderRadius,
  inputPadding,
  inputPlaceholder,
  onChange,
}) => {
  const [username, setUsername] = useState({
    GitHub: ``,
    DeviantArt: ``,
    Dribble: ``,
    SoundCloud: ``,
    Pinterest: ``,
  });

  const [inputVal, setInputVal] = useState({
    GitHub: 0,
    DeviantArt: 0,
    Dribble: 0,
    SoundCloud: 0,
    Pinterest: 0,
  });

  useEffect(() => {
    setUsername({
      GitHub: inputValue[0]?.username,
      DeviantArt: inputValue[1]?.username,
      Dribble: inputValue[2]?.username,
      SoundCloud: inputValue[3]?.username,
      Pinterest: inputValue[4]?.username,
    });
  }, [inputValue]);

  const handleChange = (e) => {
    const input = e.currentTarget;
    setInputVal({ ...inputVal, [input.name]: input.value });
    onChange(e);
  };

  return (
    <div className={`flex flex-wrap justify-between items-center ${divHeight}`}>
      {icons.map((icon, idx) => (
        <div key={icon.name} id={icon.name} className="flex">
          <button
            type="button"
            id={idx}
            name={icon.name}
            className={`flex basis-1/6 justify-center items-center ${buttonsHeight}`}
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
              inputVal[icon.name] ? inputVal[icon.name] : username[icon.name]
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
