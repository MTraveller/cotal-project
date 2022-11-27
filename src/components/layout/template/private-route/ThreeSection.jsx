import React from 'react';

export const ThreeSection = ({
  title,
  leftStyles,
  middleStyles,
  rightStyles,
  componentLeft: ComponentLeft,
  componentMiddle: ComponentMiddle,
  componentRight: ComponentRight,
  params,
  model,
}) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {title ? <h1 className="text-3xl">{title}</h1> : ``}
    <div className="w-full flex flex-flow flex-wrap justify-center gap-6 xl:gap-8 mt-8">
      <div className={`${leftStyles}`}>
        <ComponentLeft {...params} />
      </div>
      <div className={`${middleStyles}`}>
        <ComponentMiddle model={model} {...params} />
      </div>
      <div className={`${rightStyles}`}>
        <ComponentRight {...params} />
      </div>
    </div>
  </div>
);
