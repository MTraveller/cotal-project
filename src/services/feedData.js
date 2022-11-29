import http from './httpService';
import { handleTokenRefresh } from './authService';

const apiProfileMeEndpoint = `${process.env.GATSBY_API_URL}`;

export default async function getFeedDataHandler(page, token) {
  // GET user data from api
  const endPoint = page ? false : `/posts/`;
  const url = endPoint ? apiProfileMeEndpoint + endPoint : page;

  const result = await http
    .get(url, {
      headers: {
        Authorization: `Cotal ${token}`,
      },
    })
    .then((res) => res)
    .catch((ex) => ex);

  if (result.response?.status === 401) await handleTokenRefresh();

  return result;
}
