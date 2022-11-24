import React from 'react';

export const SideBarRight = () => {
  return (
    <div className="bg-black/[.2] lg:sticky lg:top-[80px] rounded-lg p-6">
      <div className="flex flex-col gap-y-24">
        <p className="w-full h-80 flex bg-blue-700/5 opacity-70 justify-center items-center">
          Popular
        </p>
        <p className="w-full h-80 flex bg-neutral-700/5 opacity-70 justify-center items-center">
          Your Ad
        </p>
        <p className="w-full h-80 flex bg-rose-700/5 opacity-70 justify-center items-center">
          Tags
        </p>
      </div>
    </div>
  );
};
