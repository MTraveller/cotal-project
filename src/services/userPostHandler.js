import http from './httpService';

const apiEndpoint = `${process.env.GATSBY_API_URL}`;

export async function userProfileHandler({ data, token }) {
  const formData = new FormData();

  if (data.image) formData.append(`image`, data.image);
  if (data.status) formData.append(`status`, data.status);
  if (data.location) formData.append(`location`, data.location);

  const headers = {
    Authorization: `Cotal ${token}`,
  };

  const error = [];

  const res = await http
    .put(`${apiEndpoint}/profiles/me/`, formData, {
      headers,
    })
    .then((res) => res)
    .catch((ex) => ex);

  if (res.code === `ERR_NETWORK`) {
    error.push(`Cotal Backend`, res.code);
  } else if (res.code === `ERR_BAD_REQUEST`) {
    Object.entries(res.response.data).forEach((arr) => {
      error.push(arr[0], arr[1][0]);
    });
  }

  if (error.length !== 0) return error;
  return true;
}

export async function userSocialHandler({ user, data, token }) {
  const headers = {
    Authorization: `Cotal ${token}`,
  };

  const error = [];
  for (const obj of Object.entries(data)) {
    const object = { name: obj[0], username: obj[1].username };

    const res = obj[1].id
      ? await http
          .put(
            `${apiEndpoint}/profiles/${user}/socials/${obj[1].id}/`,
            object,
            {
              headers,
            }
          )
          .then((res) => res)
          .catch((ex) => ex)
      : await http
          .post(`${apiEndpoint}/profiles/${user}/socials/`, object, {
            headers,
          })
          .then((res) => res)
          .catch((ex) => ex);

    if (res.code === `ERR_NETWORK`) {
      error.push(`Cotal Backend`, res.code);
    } else if (res.code === `ERR_BAD_REQUEST`) {
      Object.entries(res.response.data).forEach((arr) => {
        error.push(obj[0], arr[1][0]);
      });
    }
  }

  if (error.length !== 0) return error;
  return true;
}

export async function userLinktreesHandler({ user, data, token }) {
  console.log(user);
  console.log(data);
  console.log(data[0].username);
  const headers = {
    Authorization: `Cotal ${token}`,
  };

  const error = [];
  const object = { username: data[0].username };

  const res = data[0].id
    ? await http
        .put(
          `${apiEndpoint}/profiles/${user}/linktree/${data[0].id}/`,
          object,
          {
            headers,
          }
        )
        .then((res) => res)
        .catch((ex) => ex)
    : await http
        .post(`${apiEndpoint}/profiles/${user}/linktree/`, object, {
          headers,
        })
        .then((res) => res)
        .catch((ex) => ex);

  if (res.code === `ERR_NETWORK`) {
    error.push(`Cotal Backend`, res.code);
  } else if (res.code === `ERR_BAD_REQUEST`) {
    Object.entries(res.response.data).forEach((arr) => {
      error.push(`Linktree`, arr[1][0]);
    });
  }

  if (error.length !== 0) return error;
  return true;
}

export async function userConnectHandler({ user, data, token }) {
  console.log(data);
}
