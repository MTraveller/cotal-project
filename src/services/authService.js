import http from './httpService';

const apiEndpoint = `${process.env.API_URL}/auth/jwt/create`;

/*  Initial auth service from Gatsby's tutorial:
 *  https://www.gatsbyjs.com/tutorial/authentication-tutorial/
 */
export const isBrowser = () => {
  const hasWindow = typeof window !== 'undefined' ? true : false;
  return hasWindow;
};

export const getUser = () =>
  isBrowser() && window.localStorage.getItem('cotalUser')
    ? JSON.parse(window.localStorage.getItem('cotalUser'))
    : {};

const setUser = (user) =>
  window.localStorage.setItem('cotalUser', JSON.stringify(user));

export const handleLogin = ({ email, password }) => {
  const jsonToken = http.post(apiEndpoint, {
    email: email,
    password: password,
  });

  if (jsonToken.statusCode === 'ok') {
    return setUser({
      jsonToken,
    });
  }

  return false;
};

export const isLoggedIn = () => {
  const user = getUser();

  return !!user.jsonToken;
};

export const logout = (callback) => {
  setUser({});
  callback();
};
