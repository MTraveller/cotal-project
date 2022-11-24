import http from './httpService';

const apiEndpoint = `${process.env.GATSBY_API_URL}`;

export const deleteDataHandler = async (prefix, user, model, item, token) => {
  const headers = {
    Authorization: `Cotal ${token}`,
  };

  const res = await http
    .delete(`${apiEndpoint}/${prefix}/${user}/${model}/${item}/`, { headers })
    .then((res) => res)
    .catch((ex) => ex);

  if (res.status === 204) return true;
};
