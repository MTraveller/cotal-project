import * as React from 'react';
// import { Link } from 'gatsby';

// import http from '../services/httpService';
import Seo from '../Seo';

const Feed = (rest) => {
  // console.log('Feed Page');
  // console.log(rest);
  return (
    <>
      <Seo title="Feed" />
      <h1>
        This page is <b>Feed Page</b>
      </h1>
      <p>
        This feed page is for the user <code>hello</code> on the DRF db.
      </p>
    </>
  );
};

export default Feed;
