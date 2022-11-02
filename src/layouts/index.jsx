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

const IndexDivStyles = styled.div`
  height: 100%;

  @media all and (max-width: 1023px) {
    background-image: linear-gradient(
      45deg,
      hsl(0deg 0% 9%) 0%,
      hsl(240deg 7% 14%) 1%,
      hsl(244deg 16% 18%) 4%,
      hsl(242deg 23% 22%) 9%,
      hsl(241deg 31% 26%) 18%,
      hsl(242deg 39% 30%) 32%,
      hsl(241deg 47% 35%) 49%,
      hsl(238deg 41% 35%) 68%,
      hsl(234deg 36% 37%) 82%,
      hsl(229deg 31% 38%) 91%,
      hsl(225deg 26% 39%) 96%,
      hsl(221deg 21% 40%) 99%,
      hsl(218deg 15% 41%) 100%
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

  return (
    <ClientOnly>
      <ToastContainer />
      <UserContextProvider>
        <UserContext.Consumer>
          {(value) => (
            <IndexDivStyles>
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
            </IndexDivStyles>
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
