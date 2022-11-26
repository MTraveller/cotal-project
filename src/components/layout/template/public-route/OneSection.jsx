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
  flex-flow
  flex-wrap
  gap-10
  lg:gap-20
  xl:gap-40
  mt-8
`;

export const OneSection = ({ title, children }) => (
  <Wrapper>
    {title ? <h1 className="text-3xl">{title}</h1> : ``}
    <DivStyles>{children}</DivStyles>
  </Wrapper>
);
