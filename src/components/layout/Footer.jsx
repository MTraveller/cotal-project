import React from 'react';

const Footer = ({ location }) =>
  location.pathname === `/` ? (
    <footer className="md:absolute md:bottom-0 md:left-5">
      <div className="flex items-center p-3 bg-stone-900 dark:bg-neutral-900 md:bg-inherit text-white/[.2] dark:text-gray-600/[.5]">
        © {new Date().getFullYear()} &middot; Developed by&nbsp;
        <a href="https://github.com/MTraveller">@MTraveller</a>
      </div>
    </footer>
  ) : (
    <footer>
      © {new Date().getFullYear()} &middot; Developed by
      {` `}
      <a href="https://github.com/MTraveller">@MTraveller</a>
    </footer>
  );

export default Footer;
