import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import {
  useLoggedInContext,
  LoggedInContext,
} from '../context/LoggedInContext';
import { getUser } from '../services/authService';
import ClientOnly from '../hooks/ClientOnly';
import Wrapper from '../components/layout/Wrapper';

const Layout = ({ children, location }) => {
  let isLoggedIn = useLoggedInContext();
  isLoggedIn = Object.keys(getUser()).length ? true : false;

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
      <LoggedInContext.Provider value={isLoggedIn}>
        <Wrapper data={data} children={children} location={location} />
      </LoggedInContext.Provider>
    </ClientOnly>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
