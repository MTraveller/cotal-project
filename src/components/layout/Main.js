import * as React from 'react';
import styled from 'styled-components';

const IndexMainStyles = styled.main`
  height: 100%;

  @media all and (max-width: 1023px) {
    height: calc(100% - 108px);
  }
`;

const MainStyles = styled.main``;

const Main = ({ children, location }) => {
  return location.pathname === `/` ? (
    <IndexMainStyles
      className={`w-full inline-flex flex-wrap content-center justify-center gap-y-14 lg:gap-y-0 lg:bg-stone-900 dark:lg:bg-neutral-900`}
    >
      {children}
    </IndexMainStyles>
  ) : (
    <MainStyles>{children}</MainStyles>
  );
};

export default Main;
