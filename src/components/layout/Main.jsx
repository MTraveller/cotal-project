import React from 'react';

const Main = ({ children, location }) => {
  return location.pathname === `/` ? (
    <main className="w-full h-full inline-flex flex-wrap lg:content-center justify-center gap-y-0 lg:bg-stone-900 dark:lg:bg-neutral-900">
      {children}
    </main>
  ) : (
    <main className="pt-7">{children}</main>
  );
};

export default Main;
