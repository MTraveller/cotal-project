import React, { createContext, useState, useEffect } from 'react';

import { getUser } from '../services/authService';

export const UserContext = createContext({
  isLoggedIn: false,
});

const UserContextProvider = ({ children }) => {
  const user = UserContext;
  Object.keys(getUser()).length
    ? (user.isLoggedIn = true)
    : (user.isLoggedIn = false);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
