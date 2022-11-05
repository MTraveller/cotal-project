import http from '../../services/httpService';

const apiLoginEndpoint = `${process.env.GATSBY_API_URL}/auth/jwt/create/`;

export default async function userLoginHandler(req, res) {
  const result = await http
    .post(apiLoginEndpoint, {
      email: req.account.email,
      password: req.account.password,
    })
    .then((res) => {
      return res;
    })
    .catch((ex) => {
      return ex;
    });

  return result;
}
