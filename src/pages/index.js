import React from 'react';
import styled from 'styled-components';
import Seo from '../components/seo';
import LoginForm from '../components/LoginForm';

const DivStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: center;
`;

const IndexPage = () => {
  return (
    <DivStyles>
      <h1>Welcome to Cotal</h1>
      <LoginForm />
    </DivStyles>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
