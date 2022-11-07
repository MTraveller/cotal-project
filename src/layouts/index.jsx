import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { getUser } from '../services/authService';
import ClientOnly from '../hooks/ClientOnly';
import { isLoggedInContext } from '../context/IsLoggedInContext';
import Wrapper from '../components/layout/Wrapper';

const Layout = ({ children, location }) => {
  let user = useContext(isLoggedInContext);
  Object.keys(getUser()).length
    ? (user.isLoggedIn = true)
    : (user.isLoggedIn = false);

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
      <isLoggedInContext.Provider value={user}>
        <Wrapper data={data} children={children} location={location} />
      </isLoggedInContext.Provider>
    </ClientOnly>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
