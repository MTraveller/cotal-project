import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';
import Seo from '../components/seo';
import PrivateRoute from '../components/PrivateRoute';

const DivStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: center;
`;

const FeedPage = () => {
  return (
    <>
      <DivStyles>
        <p>Welcome to Your Feed</p>
        <p>Scoll to see more</p>
        <p>3rd column</p>
      </DivStyles>

      <Router basepath="/">
        <PrivateRoute path="/feed" />
      </Router>
    </>
  );
};

export const Head = () => <Seo title="Feed" />;

export default FeedPage;
