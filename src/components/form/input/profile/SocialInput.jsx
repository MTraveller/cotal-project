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
  const [username, setUsername] = useState({
    GitHub: ``,
    DeviantArt: ``,
    Dribble: ``,
    SoundCloud: ``,
    Pinterest: ``,
  });

  useEffect(() => {
    if (!username) {
      setUsername({
        GitHub: socials[0]?.username,
        DeviantArt: socials[1]?.username,
        Dribble: socials[2]?.username,
        SoundCloud: socials[3]?.username,
        Pinterest: socials[4]?.username,
      });
    }
  }, [username, socials]);

  const handleChange = (e) => {
    const input = e.currentTarget;
    setUsername({ ...username, [input.name]: input.value });
  };

  const handleClick = (e) => {
    const { currentTarget: button } = e;
    const activeId = Array.from(button.parentNode.childNodes).filter((node) =>
      node.classList.contains(`active`)
    )[0].id;

    const value = username[activeId];

    setSocials({ ...socials, [activeId]: value });

    handleIconSaveFlip(e);
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
            value={username[icon.name] ? username[icon.name] : ``}
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
        onClick={handleClick}
      >
        Save
      </button>
    </div>
  );
};
