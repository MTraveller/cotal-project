import React from 'react';

export const OneSection = ({ userData, title, component: Component }) => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    {title ? <h1 className="text-3xl">{title}</h1> : ``}
    <div className="w-full flex flex-flow flex-wrap gap-10 lg:gap-20 xl:gap-40 mt-8">
      <Component userData={userData} />
    </div>
  </div>
);
