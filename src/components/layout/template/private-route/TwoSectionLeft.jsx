import React from 'react';

export const TwoSectionLeft = ({
  title,
  leftStyles,
  rightStyles,
  componentLeft: ComponentLeft,
  componentRight: ComponentRight,
  ...rest
}) => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    {title ? <h1 className="text-3xl">{title}</h1> : ``}
    <div className="w-full flex flex-row flex-wrap gap-10 xl:gap-20 mt-8">
      <div className={`${leftStyles}`}>
        <ComponentLeft {...rest} />
      </div>
      <div className={`${rightStyles}`}>
        <ComponentRight {...rest} />
      </div>
    </div>
  </div>
);
