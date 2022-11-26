import { toast } from 'react-toastify';
import { navigate } from 'gatsby';

import userLoginHandler from './authenticate';
import userRegisterHandler from './userRegister';
import userRefreshHandler from './userRefresh';
import { useLoggedInContext } from '../context/LoggedInContext';

/**
 *  Initial auth service from Gatsby's tutorial:
 *  https://www.gatsbyjs.com/tutorial/authentication-tutorial/
 */
export const isBrowser = () => typeof window !== `undefined`;

export const getUser = () => {
  const cotalUser = isBrowser()
    ? window.localStorage.getItem(`cotalUser`)
    : null;

  return cotalUser && cotalUser !== `undefined`
    ? JSON.parse(window.localStorage.getItem(`cotalUser`))
    : {};
};

const setUser = ({ user }) => {
  return window.localStorage.setItem(`cotalUser`, JSON.stringify(user));
};

export const handleLogin = async (account) => {
  toast.dismiss();
  const res = await userLoginHandler({ account });

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
  } else if (res.status === 200) {
    const { access, refresh } = res.data;
    setUser({
      user: {
        access,
        refresh,
      },
    });

    return true;
  }

  return false;
};

export const handleRegister = async (account) => {
  toast.dismiss();
  const res = await userRegisterHandler(account);

  if (res.code === `ERR_NETWORK`) {
    toast.error(
      `${res.message}: 
      This most likely means that our server 
      is currently offline. Please try again later!`
    );
  } else if (res.code === `ERR_BAD_REQUEST`) {
    Object.entries(res.response.data).forEach((key, val) => {
      const error = key[0].charAt(0).toUpperCase() + key[0].slice(1);
      toast.warn(`${error}: ${key[1]}`);
    });
  }
  if (res.status === 201) {
    const { email, password } = account.account;

    const accountObj = { email: email, password: password };
    return handleLogin(accountObj);
  }

  return false;
};

export const handleResetPassword = (account) => {
  // Function should be updated to make a
  // server call to the JWT forgot endpoint!
  return `success`;
};

export const isLoggedIn = () => {
  const DoCheckLogin = () => useLoggedInContext();
  return DoCheckLogin();
};

export const handleLogout = () => {
  window.localStorage.removeItem('cotalUser');
  return navigate(`/`);
};

export const handleTokenRefresh = async () => {
  const user = getUser();
  const res = await userRefreshHandler(user.refresh);

  if (res?.statusText === `OK`) {
    setUser({
      access: res.data.access,
      refresh: user.refresh,
    });
  } else if (res === 401) {
    return handleLogout();
  }

  return true;
};
