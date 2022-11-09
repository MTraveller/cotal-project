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
  let isLoggedIn = useContext(isLoggedInContext);
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
      <isLoggedInContext.Provider value={isLoggedIn}>
        <Wrapper data={data} children={children} location={location} />
      </isLoggedInContext.Provider>
    </ClientOnly>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
