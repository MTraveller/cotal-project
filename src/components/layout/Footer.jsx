import React from 'react';

const Footer = ({ location }) =>
  location.pathname === `/` ? (
    <footer className="lg:absolute lg:bottom-0 lg:left-5">
      <div className="flex items-center p-3 lg:bg-inherit text-white/[.2] dark:text-gray-600/[.5]">
        © {new Date().getFullYear()} &middot; Developed by&nbsp;
        <a
          href="https://github.com/MTraveller"
          target="_blank"
          rel="noreferrer"
        >
          @MTraveller
        </a>
      </div>
    </footer>
  ) : (
    <footer>
      © {new Date().getFullYear()} &middot; Developed by
      {` `}
      <a href="https://github.com/MTraveller" target="_blank" rel="noreferrer">
        @MTraveller
      </a>
    </footer>
  );

export default Footer;
