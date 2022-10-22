import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';
import Seo from '../../components/seo';
import PrivateRoute from '../../components/PrivateRoute';

const DivStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: center;
`;

const ProfilePage = () => {
  return (
    <>
      <DivStyles>
        <p>Welcome to Your Profile Page</p>
        <p>Add, edit, delete and more..</p>
      </DivStyles>

      <Router basepath="/">
        <PrivateRoute path="/profile" />
      </Router>
    </>
  );
};

export const Head = () => <Seo title="Profile" />;

export default ProfilePage;
