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
    .get(apiProfileMeEndpoint + `/profiles/` + user + `/`, {})
    .then((res) => res)
    .catch((ex) => ex);

  if (profile.status !== 200) data[`profile`] = `error`;
  data[`profile`] = profile.data;

  const post = await http
    .get(apiProfileMeEndpoint + `/posts/profiles/` + user + `/posts/`, {})
    .then((res) => res)
    .catch((ex) => ex);

  if (profile.status !== 200) data[`profile`] = `error`;
  data[`post`] = post.data;

  for await (const model of [`portfolio`, `award`, `certificate`, `creative`]) {
    const res = await http
      .get(apiProfileMeEndpoint + `/profiles/` + user + `/` + model + `s/`, {})
      .then((res) => res)
      .catch((ex) => ex);

    if (res.status !== 200) data[model] = `error`;
    data[model] = res.data;
  }

  return data;
}
