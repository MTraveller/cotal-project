import React, { createContext, useContext, useState, useEffect } from 'react';

import { getUser } from '../services/authService';
import getUserDatahandler from '../services/userData';

export const UserDataContext = createContext({
  userData: {},
  setUserData: () => {},
});

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!userData)
      getUserDatahandler(`/profiles/me/`, getUser().access)
        .then((res) => {
          return setUserData(res.data);
        })
        .catch((ex) => {
          return ex;
        });
  }, [userData]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => useContext(UserDataContext);
