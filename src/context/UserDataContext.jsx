import React, { createContext, useContext, useState, useEffect } from 'react';

import { getUser } from '../services/authService';
import getUserDatahandler from '../services/userData';

export const UserDataContext = createContext({
  userData: {},
});

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    getUserDatahandler(getUser().access)
      .then((res) => {
        return setUserData(res.data);
      })
      .catch((ex) => {
        return ex;
      });
  }, []);

  return (
    <UserDataContext.Provider value={{ userData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => useContext(UserDataContext);
