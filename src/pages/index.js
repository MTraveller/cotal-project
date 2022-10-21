import * as React from "react";
import Seo from "../components/seo";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <h1>Welcome to Cotal</h1>
  </>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
