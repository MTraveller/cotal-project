import React from 'react';

import {
  SiDeviantart,
  SiDribbble,
  SiGithub,
  SiSoundcloud,
  SiPinterest,
} from 'react-icons/si';

export const socialIcon = [
  {
    name: `DeviantArt`,
    url: `https://www.deviantart.com`,
    component: <SiDeviantart size={`28px`} />,
  },
  {
    name: `Dribble`,
    url: `https://dribbble.com`,
    component: <SiDribbble size={`28px`} />,
  },
  {
    name: `GitHub`,
    url: `https://github.com`,
    component: <SiGithub size={`28px`} />,
  },
  {
    name: `SoundCloud`,
    url: `https://soundcloud.com`,
    component: <SiSoundcloud size={`28px`} />,
  },
  {
    name: `Pinterest`,
    url: `https://www.pinterest.com`,
    component: <SiPinterest size={`28px`} />,
  },
];
