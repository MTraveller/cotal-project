import React from 'react';

export const SideBarLeft = () => {
  return (
    <div className="bg-black/[.2] lg:sticky lg:top-[80px] rounded-lg p-6">
      <div className="flex flex-col gap-y-24">
        <p className="w-full h-80 flex bg-blue-700/5 opacity-70 justify-center items-center">
          Discussions
        </p>
        <p className="w-full h-80 flex bg-neutral-700/5 opacity-70 justify-center items-center">
          Mentions
        </p>
      </div>
    </div>
  );
};
