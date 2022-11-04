import http from '../../services/httpService';

const apiLoginEndpoint = `${process.env.API_URL}/auth/users/`;

export default async function userRegisterHandler(req, res) {
  const accForAPI = { ...req.account };

  Object.keys(accForAPI).forEach((key) => {
    if ([`firstname`, `lastname`].includes(key)) {
      const idx = key.indexOf(`n`);
      const name = key.substring(0, idx) + `_` + key.slice(idx);
      accForAPI[name] = req.account[key];
      delete accForAPI[key];
    }
  });

  const result = await http
    .post(apiLoginEndpoint, JSON.stringify(accForAPI), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res;
    })
    .catch((ex) => {
      return ex;
    });

  return result;
}
