import http from './httpService';

const apiRefreshEndpoint = `${process.env.GATSBY_API_URL}/auth/jwt/refresh`;

export default async function userLoginHandler(req, res) {
  const result = await http
    .post(apiRefreshEndpoint, {
      refresh: req,
    })
    .then((res) => {
      return res;
    })
    .catch((ex) => {
      return ex;
    });

  const status = result.response?.status;
  if (status === 401) return status;

  return result;
}
