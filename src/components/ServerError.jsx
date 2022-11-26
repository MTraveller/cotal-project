import React from 'react';
import Seo from './Seo';

export const ServerError = () => (
  <>
    <p className="text-2xl text-center">
      Sorry, we are experiencing server errors at the moment. Please try again
      later!
    </p>
  </>
);

export function Head() {
  return <Seo title="Error" />;
}
