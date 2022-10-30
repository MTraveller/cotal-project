import * as React from 'react';
import styled from 'styled-components';

const MainStyles = styled.main``;

const Main = ({ children, location }) => {
  return location.pathname === `/` ? (
    <main>{children}</main>
  ) : (
    <MainStyles>{children}</MainStyles>
  );
};

export default Main;
