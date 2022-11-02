import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ClientOnly from '../hooks/ClientOnly';
import UserContextProvider, { UserContext } from '../context/UserContext';
import Header from '../components/Layout/Header';
import Main from '../components/Layout/Main';
import Footer from '../components/Layout/Footer';

let DivStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    min-height: calc(100% - 135px);
  }

  footer {
    display: flex;
    align-items: center;
    padding: 1rem;
  }
`;

const IndexDivStyles = styled.div`
  height: 100%;

  @media all and (max-width: 1023px) {
    background: rgb(38, 38, 38);
    background: radial-gradient(
      circle,
      rgba(38, 38, 38, 1) 0%,
      rgba(36, 36, 36, 1) 25%,
      rgba(34, 34, 34, 1) 50%,
      rgba(32, 32, 32, 1) 75%,
      rgba(24, 24, 24, 1) 100%
    );
  }
`;

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

  if (location.pathname === `/`) DivStyles = IndexDivStyles;

  return (
    <ClientOnly>
      <ToastContainer />
      <UserContextProvider>
        <UserContext.Consumer>
          {(value) => (
            <DivStyles>
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
              <Footer location={location} />
            </DivStyles>
          )}
        </UserContext.Consumer>
      </UserContextProvider>
    </ClientOnly>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
