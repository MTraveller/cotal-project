import * as React from 'react';
import { Link } from 'gatsby';

import http from '../../services/httpService';
import Seo from '../../components/seo';

function UserPage({ serverData }) {
  if (!serverData.message) {
    console.log('UserPage');
    console.log(serverData);

    if (!serverData?.detail) {
      return (
        <>
          <Seo
            title={serverData?.slug ? serverData.slug : serverData?.detail}
          />
          <h1>
            This page is <b>User Page</b>
          </h1>
          <p>
            This page is for the user{' '}
            <code>
              {serverData?.slug ? serverData.slug : serverData?.detail}
            </code>{' '}
            on the DRF db.
          </p>
        </>
      );
    } else {
      return (
        <>
          <Seo title={serverData.detail} />
          <h1>Oops.. User does not exist!</h1>
          <p>
            Error: <code>{serverData.detail}</code>
          </p>
          <br />
          <Link to="/">Go back to the homepage</Link>
        </>
      );
    }
  } else {
    return (
      <>
        <Seo title={`Error`} />
        <h1>Sorry an unexpected error happened.</h1>
        <p>
          Error: <code>{serverData.message}</code>
        </p>
        <Link to="/">Go back to the homepage</Link>
      </>
    );
  }
}

export default UserPage;

export async function getServerData({ params }) {
  try {
    const res = await http.get(
      `${process.env.API_URL}/profiles/${params.slug}/`
    );

    return {
      props: res.data,
    };
  } catch (ex) {
    if (ex.response && ex.response.data) {
      return {
        props: ex.response.data,
      };
    }
    return {
      props: ex,
    };
  }
}
