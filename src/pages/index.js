import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import Login from '../components/Form/Login';
import Seo from '../components/Seo';
import { isLoggedIn } from '../services/authService';

const DivStyles = styled.div`
  flex: 1 100%;

  @media all and (min-width: 428px) {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: auto;

    #index-welcome-div {
      width: min(96%, 600px);
    }

    form {
      width: min(96%, 600px);
    }
  }
`;

export default function IndexPage() {
  return isLoggedIn() ? (
    navigate(`/feed/`)
  ) : (
    <DivStyles>
      <div id="index-welcome-div">
        <h1>Welcome to Cotal</h1>
        <p>
          Where talents join forces with one another to reach a common goal.
        </p>
      </div>
      <Login />
    </DivStyles>
  );
}

export const Head = () => <Seo title="Home" />;
