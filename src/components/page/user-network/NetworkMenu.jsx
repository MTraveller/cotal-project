import React from 'react';

export const NetworkMenu = ({ setMenu }) => {
  const handleClick = ({ target: button }) => {
    setMenu(button.id);
  };

  return (
    <div className="bg-gray-400/10 dark:bg-black/[.2] rounded-lg p-6">
      <div className="flex flex-row lg:flex-col gap-5">
        <button
          id="request"
          type="button"
          className="basis-1/2 sm:w-full py-2 fancy-button"
          onClick={handleClick}
        >
          View Requests
        </button>
        <button
          id="network"
          type="button"
          className="basis-1/2 sm:w-full py-2 fancy-button"
          onClick={handleClick}
        >
          View Network
        </button>
      </div>
    </div>
  );
};
