import * as React from 'react';
import tw from 'tailwind-styled-components';

const MainStyles = tw.main`
  dark:border-t
  border-slate-700
  dark:text-slate-400
  pt-7
`;

const Main = ({ children, location }) => {
  return location.pathname === `/` ? (
    <main className="w-full h-full inline-flex flex-wrap lg:content-center justify-center gap-y-0 lg:bg-stone-900 dark:lg:bg-neutral-900">
      {children}
    </main>
  ) : (
    <MainStyles>{children}</MainStyles>
  );
};

export default Main;
