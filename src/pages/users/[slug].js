import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const UserPage = ({ serverData }) => {
  console.log(serverData);
  return (
    <>
      <Seo title={`${serverData.slug}`} />;
      <Layout>
        <h1>
          This page is <b>User Page</b>
        </h1>
        <p>
          This page is for the user <code>{serverData.slug}</code> on the DRF
          db.
        </p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </>
  );
};

export default UserPage;

export async function getServerData(props) {
  try {
    const res = await fetch(
      `http://127.0.0.1:3000/rest/profiles/${props.params.slug}/`
    );
    if (!res.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
