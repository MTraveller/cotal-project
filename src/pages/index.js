import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import Login from '../components/Form/Login';
import Seo from '../components/Seo';
import { isLoggedIn } from '../services/authService';

const DivStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: center;
`;

export default function IndexPage() {
  return isLoggedIn() ? (
    navigate(`/feed/`)
  ) : (
    <DivStyles>
      <h1>Welcome to Cotal</h1>
      <Login />
    </DivStyles>
  );
}

export const Head = () => <Seo title="Home" />;
