import http from './httpService';
import { handleTokenRefresh } from './authService';

const apiProfileMeEndpoint = `${process.env.GATSBY_API_URL}/profiles/me/`;

export default async function getUserDataHandler(req) {
  // GET user data from api
  const result = await http
    .get(apiProfileMeEndpoint, {
      headers: {
        Authorization: `JWT ${req}`,
      },
    })
    .then((res) => res)
    .catch((ex) => ex);

  if (result.response?.status === 401) await handleTokenRefresh();

  return result;
}
