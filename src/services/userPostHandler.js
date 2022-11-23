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

export async function userPostContentHander({
  isPost,
  type,
  model,
  user,
  data,
  token,
}) {
  const modelName = model.toLowerCase();

  const formData = new FormData();

  if (data.image) formData.append(`image`, data.image);
  if (data.title) formData.append(`title`, data.title);
  if (isPost ? data.post : data.description)
    formData.append(type, isPost ? data.post : data.description);
  if (data.link) formData.append(`link`, data.link);

  const headers = {
    Authorization: `Cotal ${token}`,
  };

  const error = [];

  const res = data.slug
    ? await http
        .put(
          isPost
            ? `${apiEndpoint}/posts/profiles/${user}/posts/${data.slug}/`
            : `${apiEndpoint}/profiles/${user}/${modelName}s/${data.slug}/`,
          formData,
          {
            headers,
          }
        )
        .then((res) => res)
        .catch((ex) => ex)
    : await http
        .post(
          isPost
            ? `${apiEndpoint}/posts/profiles/${user}/posts/`
            : `${apiEndpoint}/profiles/${user}/${modelName}s/`,
          formData,
          {
            headers,
          }
        )
        .then((res) => res)
        .catch((ex) => ex);

  if (res.status === 200 || res.status === 201) {
    return true;
  } else if (res.code === `ERR_NETWORK`) {
    error.push(`Cotal Backend`, res.code);
  } else if (res.status >= 400 && res.status < 500) {
    console.log(res.response);
    Object.entries(res.data).forEach((arr) => {
      error.push(arr[1]);
    });
  }

  console.log(res.response.status >= 400 && res.response.status < 500);

  console.log(error);
  if (error.length !== 0) return error;
  return true;
}
