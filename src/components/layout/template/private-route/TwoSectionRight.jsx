import React from 'react';

export const TwoSectionRight = ({
  title,
  leftStyles,
  rightStyles,
  componentLeft: ComponentLeft,
  componentRight: ComponentRight,
  slug,
}) => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    {title ? <h1 className="text-3xl">{title}</h1> : ``}
    <div className="w-full flex flex-row flex-wrap gap-10 xl:gap-20 mt-8">
      <div className={`${leftStyles}`}>
        <ComponentLeft user={slug} />
      </div>
      <div className={`${rightStyles}`}>
        <ComponentRight />
      </div>
    </div>
  </div>
);
