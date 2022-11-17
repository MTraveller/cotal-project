import http from './httpService';
import { handleTokenRefresh } from './authService';

const apiProfileMeEndpoint = `${process.env.GATSBY_API_URL}`;

export default async function getUserDataHandler(urlTrail, token) {
  // GET user data from api
  if (!token) return null;

  const result = await http
    .get(apiProfileMeEndpoint + urlTrail, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
    .then((res) => res)
    .catch((ex) => ex);

  if (result.response?.status === 401) await handleTokenRefresh();

  return result;
}
