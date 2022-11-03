import http from '../../services/httpService';

const apiLoginEndpoint = `${process.env.API_URL}/auth/users/`;

export default async function userRegisterHandler(req, res) {
  // prettier-ignore
  const account = Object.assign(
    req.account, 
    { 'first_name': req.account['firstname'] },
    delete req.account['firstname'],
    { 'last_name': req.account['lastname'] },
    delete req.account['lastname']
  );

  console.log(JSON.stringify(account));
  const result = await http
    .post(apiLoginEndpoint, JSON.stringify(account), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((ex) => {
      console.log(ex);
      return ex;
    });

  return result;
}
