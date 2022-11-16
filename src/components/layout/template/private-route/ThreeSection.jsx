import React from 'react';
import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
  max-w-7xl
  mx-auto
  px-4
  sm:px-6
  lg:px-8
`;

const DivStyles = tw.div`
  w-full
  flex
  flex-flow
  flex-wrap
  justify-center
  gap-6
  xl:gap-8
  mt-8
`;

export const ThreeSection = ({
  title,
  leftStyles,
  middleStyles,
  rightStyles,
  componentLeft: ComponentLeft,
  componentMiddle: ComponentMiddle,
  componentRight: ComponentRight,
}) => (
  <Wrapper>
    {title ? <h1 className="text-3xl">{title}</h1> : ``}
    <DivStyles>
      <div className={`${leftStyles}`}>
        <ComponentLeft />
      </div>
      <div className={`${middleStyles}`}>
        <ComponentMiddle />
      </div>
      <div className={`${rightStyles}`}>
        <ComponentRight />
      </div>
    </DivStyles>
  </Wrapper>
);
