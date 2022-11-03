import * as React from 'react';
// import styled from 'styled-components';

// const IndexMainStyles = styled.main`
//   height: 100%;

//   @media all and (max-width: 1023px) {
//     height: calc(100% - 108px - 1rem);
//     /* flex-grow: 2; */
//   }
// `;

// const MainStyles = styled.main``;

const Main = ({ children, location }) => {
  return location.pathname === `/` ? (
    <main
      className={`w-full h-full inline-flex flex-wrap lg:content-center justify-center gap-y-0 lg:bg-stone-900 dark:lg:bg-neutral-900`}
    >
      {children}
    </main>
  ) : (
    <main>{children}</main>
  );
};

export default Main;
