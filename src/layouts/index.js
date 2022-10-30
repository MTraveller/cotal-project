import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ClientOnly from '../hooks/ClientOnly';
import UserContextProvider, { UserContext } from '../context/UserContext';
import Header from '../components/Layout/Header';
import Main from '../components/Layout/Main';

const Layout = ({ children, location }) => {
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
      <UserContextProvider>
        <UserContext.Consumer>
          {(value) => (
            <>
              <Header
                location={location}
                isLoggedIn={value.isLoggedIn}
                siteTitle={data.site.siteMetadata?.title || `Title`}
              />
              <Main
                location={location}
                isLoggedIn={value.isLoggedIn}
                children={children}
              />
            </>
          )}
        </UserContext.Consumer>
      </UserContextProvider>
      <footer>
        © {new Date().getFullYear()} &middot; Developed by
        {` `}
        <a href="https://github.com/MTraveller">@MTraveller</a>
      </footer>
    </ClientOnly>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
