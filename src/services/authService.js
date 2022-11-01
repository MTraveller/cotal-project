import { useContext } from 'react';
import { toast } from 'react-toastify';

import userLoginHandler from '../api/users/authenticate';
import { UserContext } from '../context/UserContext';

/**
 *  Initial auth service from Gatsby's tutorial:
 *  https://www.gatsbyjs.com/tutorial/authentication-tutorial/
 */
export const isBrowser = () => typeof window !== `undefined`;

export const getUser = () =>
  isBrowser() && window.localStorage.getItem(`cotalUser`)
    ? JSON.parse(window.localStorage.getItem(`cotalUser`))
    : {};

const setUser = (user) =>
  window.localStorage.setItem(`cotalUser`, JSON.stringify(user));

export const handleLogin = async (email, password) => {
  toast.dismiss();
  const res = await userLoginHandler({ email, password });
  console.log(`handleLogin`);
  console.log(res);

  if (res.code === `ERR_NETWORK`) {
    toast.error(
      `${res.message}: 
      This most likely means that our server 
      is currently offline. Please try again later!`
    );
  } else if (res.code === `ERR_BAD_REQUEST`) {
    toast.warn(`
      ${res.response.data.detail}!
    `);
  }

  if (res?.statusText === `OK`) {
    const { access, refresh } = res.data;
    setUser({
      access,
      refresh,
    });

    return true;
  }

  return false;
};

export const handleRegister = () => {
  console.log('Register Clicked!');
};

export const isLoggedIn = () => {
  const GetIsLoggedIn = () => useContext(UserContext).isLoggedIn;

  return GetIsLoggedIn();
};

export const handleLogout = () => {
  return window.localStorage.removeItem('cotalUser');
};
