import React from 'react';

import { useLoggedInContext } from '../../../../context/LoggedInContext';

export const SideBarLeft = () => {
  const isLoggedIn = useLoggedInContext();

  return (
    <div
      className={`bg-gray-400/10 dark:bg-black/[.2] lg:sticky ${
        isLoggedIn ? `lg:top-[80px]` : `lg:top-[10px]`
      } rounded-lg p-6`}
    >
      <div className="flex flex-col gap-y-24">
        <p className="w-full h-80 flex bg-blue-700/20 dark:bg-blue-700/5 opacity-70 justify-center items-center rounded-md">
          Discussions
        </p>
        <p className="w-full h-80 flex bg-neutral-700/20 dark:bg-neutral-700/5 opacity-70 justify-center items-center rounded-md">
          Mentions
        </p>
      </div>
    </div>
  );
};
