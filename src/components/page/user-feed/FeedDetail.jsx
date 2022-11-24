import React from 'react';

import Seo from '../../Seo';

export const FeedDetail = () => (
  <>
    <Seo title="Feed" />

    <div className="bg-black/[.2] rounded-lg p-6">
      <p>
        This feed page is for the user <code>hello</code> on the DRF db.
      </p>
    </div>
  </>
);
