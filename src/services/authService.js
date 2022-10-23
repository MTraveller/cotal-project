import http from './httpService';

const apiLoginEndpoint = `${process.env.API_URL}/auth/jwt/create/`;
const apiRefreshEndpoint = `${process.env.API_URL}/auth/jwt/refresh/`;
const apiTestTokenEndpoint = `${process.env.API_URL}/`;

/*  Initial auth service from Gatsby's tutorial:
 *  https://www.gatsbyjs.com/tutorial/authentication-tutorial/
 */
export const isBrowser = () => typeof window !== 'undefined';

export const getUser = () => {
  return isBrowser() && window.localStorage.getItem('cotalUser')
    ? JSON.parse(window.localStorage.getItem('cotalUser'))
    : {};
};

const setUser = (user) =>
  window.localStorage.setItem('cotalUser', JSON.stringify(user));

export const handleLogin = async (email, password) => {
  const res = await http.post(apiLoginEndpoint, {
    email,
    password,
  });

  if (res.statusText === 'OK') {
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
  if (user?.access) return !!user?.access;

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
