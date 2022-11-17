import React from 'react';

export const OpenLinkExternal = ({ className, url, buttonText }) => (
  <button
    type="button"
    className={className}
    onClick={() => window.open(url, `_blank`, `noopener noreferrer`)}
  >
    {buttonText}
  </button>
);
