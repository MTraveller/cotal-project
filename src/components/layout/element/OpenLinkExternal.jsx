import React from 'react';

export const OpenLinkExternal = ({ url, buttonText }) => (
  <button
    type="button"
    onClick={() => window.open(url, `_blank`, `noopener noreferrer`)}
  >
    {buttonText}
  </button>
);
