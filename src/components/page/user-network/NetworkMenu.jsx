import React from 'react';

import { ButtonStyles } from '../../layout/style/ButtonStyle';

export const NetworkMenu = ({ setMenu }) => {
  const handleClick = ({ target: button }) => {
    setMenu(button.id);
  };

  return (
    <div className="bg-gray-400/10 dark:bg-black/[.2] rounded-lg p-6">
      <div className="flex flex-row lg:flex-col gap-5">
        <ButtonStyles
          id="request"
          type="button"
          className="py-2"
          onClick={handleClick}
        >
          View Requests
        </ButtonStyles>
        <ButtonStyles
          id="network"
          type="button"
          className="py-2"
          onClick={handleClick}
        >
          View Network
        </ButtonStyles>
      </div>
    </div>
  );
};
