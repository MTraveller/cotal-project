import * as React from 'react';
import styled from 'styled-components';

const MainStyles = styled.main``;

const Main = ({ children, location }) => {
  return location.pathname === `/` ? (
    <main className="w-full h-full flex flex-wrap content-center justify-center gap-y-14 lg:gap-y-0 bg-stone-900 dark:bg-neutral-900">
      {children}
    </main>
  ) : (
    <MainStyles>{children}</MainStyles>
  );
};

export default Main;
