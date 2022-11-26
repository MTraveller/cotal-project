import React from 'react';

import Seo from '../components/Seo';

const NotFoundPage = () => (
  <div className="flex flex-col items-center">
    <h1 className="text-3xl mb-5">404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </div>
);

export function Head() {
  return <Seo title="404: Not Found" />;
}

export default NotFoundPage;
