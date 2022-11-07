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
  gap-10
  lg:gap-20
  xl:gap-40
  mt-8
`;

const SectionLeftStyles = tw.div`
  basis-full
  lg:basis-60
`;

const SectionRightStyles = tw.div`
  basis-full
  lg:flex-auto
`;

export const TwoSection = ({
  userData,
  title,
  componentLeft: ComponentLeft,
  componentRight: ComponentRight,
}) => (
  <Wrapper>
    <h1 className="text-3xl">{title}</h1>
    <DivStyles>
      <SectionLeftStyles>
        <ComponentLeft userData={userData} />
      </SectionLeftStyles>
      <SectionRightStyles>
        <ComponentRight userData={userData} />
      </SectionRightStyles>
    </DivStyles>
  </Wrapper>
);
