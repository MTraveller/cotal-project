import http from './httpService';

const apiEndpoint = `${process.env.API_URL}/auth/jwt/create`;

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

export const handleLogin = ({ email, password }) => {
  const jsonWebToken = http.post(apiEndpoint, {
    email: email,
    password: password,
  });

  if (jsonWebToken.statusCode === 'ok') {
    return setUser({
      jsonWebToken,
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
