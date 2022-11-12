import { createContext, useContext } from 'react';

export const LoggedInContext = createContext(false);

export const useLoggedInContext = () => useContext(LoggedInContext);
