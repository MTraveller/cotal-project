import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Header from '../components/Layout/Header';
import ClientOnly from '../hooks/ClientOnly';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ClientOnly>
      <ToastContainer />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` - `} Made by{` `}
        <a href="https://github.com/MTraveller">@MTraveller</a>
      </footer>
    </ClientOnly>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
