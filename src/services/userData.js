import http from './httpService';
import { handleTokenRefresh } from './authService';

const apiProfileMeEndpoint = `${process.env.GATSBY_API_URL}`;

export default async function getUserDataHandler(urlTrail, token) {
  // GET user data from api
  if (!token) return null;

  const result = await http
    .get(
      apiProfileMeEndpoint + urlTrail,
      token !== `pass`
        ? {
            headers: {
              Authorization: `Cotal ${token}`,
            },
          }
        : ``
    )
    .then((res) => res)
    .catch((ex) => ex);

  if (result.response?.status === 401) await handleTokenRefresh();

  return result;
}

export async function allUserDataHandler(user) {
  // GET all user data from api
  const data = {};

  const profile = await http
    .get(apiProfileMeEndpoint + `/profiles/me/`, {})
    .then((res) => res)
    .catch((ex) => ex);

  if (profile?.status === 200) {
    data[`profile`] = profile.data;

    const post = await http
      .get(apiProfileMeEndpoint + `/posts/profiles/` + user + `/posts/`, {})
      .then((res) => res)
      .catch((ex) => ex);

    if (post?.status === 200) {
      data[`post`] = post.data;
    } else if (post.response.status !== 200) data[`post`] = `error`;

    for await (const model of [
      `portfolio`,
      `award`,
      `certificate`,
      `creative`,
    ]) {
      const res = await http
        .get(
          apiProfileMeEndpoint + `/profiles/` + user + `/` + model + `s/`,
          {}
        )
        .then((res) => res)
        .catch((ex) => ex);

      if (res?.status === 200) {
        data[model] = res.data;
      } else if (res.response.status !== 200) data[model] = `error`;
    }
  } else if (profile?.status === 401) {
    const res = await handleTokenRefresh();

    if (res === true) allUserDataHandler(user);
  } else if (profile.response.status === 404) {
    return profile;
  } else if (profile.response.status !== 200) {
    data[`profile`] = `error`;
  }

  return data;
}
