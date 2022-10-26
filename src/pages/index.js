import React from 'react';
import styled from 'styled-components';

import Login from '../components/Form/Login';
import Seo from '../components/Seo';

const DivStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: center;
`;

export default function IndexPage() {
  return (
    <DivStyles>
      <h1>Welcome to Cotal</h1>
      <Login />
    </DivStyles>
  );
}

export const Head = () => <Seo title="Home" />;
