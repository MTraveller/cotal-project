import React from 'react';

const Footer = ({ location }) =>
  location.pathname === `/` ? (
    <footer className="lg:absolute lg:bottom-0 lg:left-5">
      <div className="flex items-center p-3 lg:bg-inherit text-white/[.2] dark:text-gray-600/[.5]">
        © {new Date().getFullYear()} &middot; Developed by&nbsp;
        <a
          href="https://github.com/MTraveller"
          target="_blank"
          rel="noopener noreferrer"
        >
          @MTraveller
        </a>
      </div>
    </footer>
  ) : (
    <footer className="mt-auto py-4 dark:text-slate-600 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} &middot; Developed by
        {` `}
        <a
          href="https://github.com/MTraveller"
          target="_blank"
          rel="noopener noreferrer"
        >
          @MTraveller
        </a>
      </div>
    </footer>
  );

export default Footer;
