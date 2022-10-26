import { toast } from 'react-toastify';

import http from './httpService';

const apiLoginEndpoint = `${process.env.API_URL}/auth/jwt/create/`;
const apiRefreshEndpoint = `${process.env.API_URL}/auth/jwt/refresh/`;
const apiTestTokenEndpoint = `${process.env.API_URL}/`;

/*  Initial auth service from Gatsby's tutorial:
 *  https://www.gatsbyjs.com/tutorial/authentication-tutorial/
 */
export const isBrowser = () => typeof window !== 'undefined';

export const getUser = () =>
  isBrowser() && window.localStorage.getItem('cotalUser')
    ? JSON.parse(window.localStorage.getItem('cotalUser'))
    : {};

const setUser = (user) =>
  window.localStorage.setItem('cotalUser', JSON.stringify(user));

export const handleLogin = async (email, password) => {
  const res = await http
    .post(apiLoginEndpoint, {
      email,
      password,
    })
    .catch((ex) => {
      if (ex.code === 'ERR_NETWORK') {
        toast.error(
          `${ex.message}: This most likely means that our server is currently offline. Please try again later!`
        );
      } else if (ex.code === 'ERR_BAD_REQUEST') {
        toast.warn(`
          Email and password did not match, please try again!
        `);
      }
    });

  if (res?.statusText === 'OK') {
    const data = res.data;
    return setUser({
      access: data.access,
      refresh: data.refresh,
    });
  }

  return false;
};

export const isLoggedIn = () => {
  let user = getUser();
  if (user?.access === undefined) return null;

  http
    .get(apiTestTokenEndpoint, {
      headers: {
        Authorization: `JWT ${user.access}`,
      },
    })
    .catch((ex) => {
      if (ex.response.status === 401 && user?.access) {
        http
          .post(apiRefreshEndpoint, {
            refresh: user.refresh,
          })
          .then((res) => {
            user['access'] = res.data.access;
          })
          .finally(() => {
            setUser(user);
          });
      }

      return null;
    });

  return !!user.access;
};

export const handleLogout = (callback) => {
  setUser({});
  callback();
};
