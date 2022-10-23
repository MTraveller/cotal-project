import http from './httpService';

const apiLoginEndpoint = `${process.env.API_URL}/auth/jwt/create/`;
const apiRefreshEndpoint = `${process.env.API_URL}/auth/jwt/refresh/`;
const apiTestMeEndpoint = `${process.env.API_URL}/profiles/me/`;

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

export const isLoggedIn = async () => {
  const { user } = getUser();
  if (!user.access) return false;

  let res = '';
  try {
    if (user.access) {
      res = await http.get(apiTestMeEndpoint, {
        headers: {
          Authorization: `JWT ${user.access}`,
        },
      });
    }
  } catch (ex) {
    if (user.access && ex.response.data.messages[0].message) {
      res = await http.post(apiRefreshEndpoint, {
        refresh: user.refresh,
      });

      user['access'] = res.data.access;
      setUser({ user });
    }
  }

  return !!user.access;
};

export const handleLogout = (callback) => {
  setUser({});
  callback();
};
