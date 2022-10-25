import React from 'react';
import styled from 'styled-components';

import LoginForm from '../components/LoginForm';
import Seo from '../components/seo';

const DivStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: center;
`;

function IndexPage() {
  return (
    <DivStyles>
      <h1>Welcome to Cotal</h1>
      <LoginForm />
    </DivStyles>
  );
}

export const Head = () => <Seo title="Home" />;

export default IndexPage;
