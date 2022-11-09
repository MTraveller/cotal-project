import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { UserDataProvider } from '../../context/UserDataContext';
import { isLoggedInContext } from '../../context/IsLoggedInContext';

const DivStyles = tw.div`
  flex
  flex-col
  h-full
`;

const IndexDivStyles = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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

    footer {
      margin-top: auto;
    }
  }

  @media all and (min-width: 1024px) {
    height: 100%;
  }
`;

const htmlTags = (data, children, location, isLoggedIn) => (
  <UserDataProvider>
    <Header
      location={location}
      siteTitle={data.site.siteMetadata?.title || `Title`}
      isLoggedIn={isLoggedIn}
    />
    <Main location={location} children={children} isLoggedIn={isLoggedIn} />
    <Footer location={location} />
  </UserDataProvider>
);

const Wrapper = ({ data, children, location }) => {
  const isLoggedIn = useContext(isLoggedInContext);

  return isLoggedIn && location.pathname !== `/` ? (
    <DivStyles>{htmlTags(data, children, location, isLoggedIn)}</DivStyles>
  ) : location.pathname === `/` ? (
    <IndexDivStyles>
      {htmlTags(data, children, location, isLoggedIn)}
    </IndexDivStyles>
  ) : (
    <DivStyles>{htmlTags(data, children, location, isLoggedIn)}</DivStyles>
  );
};

export default Wrapper;
