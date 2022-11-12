import http from './httpService';

export default async function getUserHandler(req, res) {
  // GET user from api
  const slug = req.params['slug'];
  const url = `${process.env.GATSBY_API_URL}/profiles/${slug}/`;

  try {
    const result = await http.get(url);
    return result.data;
  } catch (ex) {
    return ex;
  }
}
