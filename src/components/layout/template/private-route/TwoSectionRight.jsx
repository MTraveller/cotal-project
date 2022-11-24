import React from 'react';
import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
  max-w-5xl
  mx-auto
  px-4
  sm:px-6
  lg:px-8
`;

const DivStyles = tw.div`
  w-full
  flex
  flex-row
  flex-wrap
  gap-10
  xl:gap-20
  mt-8
`;

export const TwoSectionRight = ({
  title,
  leftStyles,
  rightStyles,
  componentLeft: ComponentLeft,
  componentRight: ComponentRight,
  slug,
}) => (
  <Wrapper>
    {title ? <h1 className="text-3xl">{title}</h1> : ``}
    <DivStyles>
      <div className={`${leftStyles}`}>
        <ComponentLeft user={slug} />
      </div>
      <div className={`${rightStyles}`}>
        <ComponentRight />
      </div>
    </DivStyles>
  </Wrapper>
);
