import http from '../../services/httpService';

const apiLoginEndpoint = `${process.env.API_URL}/auth/jwt/create/`;

export default async function userLoginHandler(req, res) {
  const result = await http
    .post(apiLoginEndpoint, {
      email: req.email,
      password: req.password,
    })
    .then((res) => {
      return res;
    })
    .catch((ex) => {
      return ex;
    });

  return result;
}
