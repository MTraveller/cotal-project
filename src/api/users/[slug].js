import http from '../../services/httpService';

export default async function getUserHandler(req, res) {
  // GET user from api
  const slug = req.params['slug'];
  const url = `${process.env.GATSBY_API_URL}/profiles/${slug}/`;

  try {
    const result = await http.get(url);
    res.send(result.data);
  } catch (error) {
    res.status(500).send(error);
  }
}
