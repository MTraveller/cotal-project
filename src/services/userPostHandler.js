import FormData from 'form-data';

import http from './httpService';

export async function userProfileHandler({ data, token }) {
  // const formData = new FormData();

  // if (data.image) formData.append(`image`, data.image, data.image.name);
  // if (data.status) formData.append(`status`, data.status);
  // if (data.location) formData.append(`location`, data.location);

  const error = [];

  const headers = {
    Authorization: `Cotal ${token}`,
    'Content-Type': `multipart/form-data`,
  };

  const res = await http
    .post(`/profiles/me/`, data, { headers })
    .then((res) => res)
    .catch((ex) => ex);

  if (res?.status === 200 || res?.status === 201) {
    return true;
  } else if (res.code === `ERR_NETWORK`) {
    error.push(`Cotal Backend`, res.code);
  } else if (res.response.status === 500) {
    error.push(`Cotal Backend`, res.response.statusText);
  } else if (res.code === `ERR_BAD_REQUEST`) {
    Object.entries(res.response.data).forEach((arr) => {
      error.push(arr[0], arr[1][0]);
    });
  } else {
    return res.statusText;
  }

  if (error.length !== 0) return error;
}

export async function userSocialHandler({ user, data, token }) {
  const headers = {
    Authorization: `Cotal ${token}`,
    'Content-Type': `multipart/form-data`,
  };

  const error = [];
  for (const obj of Object.entries(data)) {
    const object = { name: obj[0], username: obj[1].username };

    const res = obj[1].id
      ? await http
          .put(`/profiles/${user}/socials/${obj[1].id}/`, object, {
            headers,
          })
          .then((res) => res)
          .catch((ex) => ex)
      : await http
          .post(`/profiles/${user}/socials/`, object, {
            headers,
          })
          .then((res) => res)
          .catch((ex) => ex);

    if (res?.status !== 200 || res?.status !== 201) {
      if (res.code === `ERR_NETWORK`) {
        error.push(`Cotal Backend`, res.code);
      } else if (res.code === `ERR_BAD_REQUEST`) {
        Object.entries(res.response.data).forEach((arr) => {
          error.push(obj[0], arr[1][0]);
        });
      }
    }
  }

  if (error.length !== 0) return error;
  return true;
}

export async function userLinktreesHandler({ user, data, token }) {
  const headers = {
    Authorization: `Cotal ${token}`,
    'Content-Type': `multipart/form-data`,
  };

  const error = [];
  const object = { username: data[0].username };

  const res = data[0].id
    ? await http
        .put(`/profiles/${user}/linktree/${data[0].id}/`, object, {
          headers,
        })
        .then((res) => res)
        .catch((ex) => ex)
    : await http
        .post(`/profiles/${user}/linktree/`, object, {
          headers,
        })
        .then((res) => res)
        .catch((ex) => ex);

  if (res?.status === 200 || res?.status === 201) {
    return true;
  } else if (res.code === `ERR_NETWORK`) {
    error.push(`Cotal Backend`, res.code);
  } else if (res.response.status >= 400 && res.response.status < 500) {
    Object.entries(res.response.data).forEach((arr) => {
      error.push(`Linktree`, arr[1][0]);
    });
  }

  if (error.length !== 0) return error;
}

export async function userConnectHandler({ user, data, token }) {
  // connect handler
}

export async function userPostContentHander({
  isPost,
  type,
  model,
  user,
  data,
  token,
}) {
  const headers = {
    Authorization: `Cotal ${token}`,
    'Content-Type': `multipart/form-data`,
  };

  // const formData = new FormData();

  // if (data.image) formData.append(`image`, data.image, data.image.name);
  // if (data.title) formData.append(`title`, data.title);
  // if (isPost ? data.post : data.description)
  //   formData.append(type, isPost ? data.post : data.description);
  // if (data.link) formData.append(`link`, data.link);

  const formData = {
    image: data.image,
    title: data.title,
    [type]: isPost ? data.post : data.description,
    slug: data.slug,
  };

  const error = [];

  const res = data.slug
    ? await http
        .put(
          isPost
            ? `/posts/profiles/${user}/posts/${data.slug}/`
            : `/profiles/${user}/${model.toLowerCase()}s/${data.slug}/`,
          formData,
          { headers }
        )
        .then((res) => res)
        .catch((ex) => ex)
    : await http
        .post(
          isPost
            ? `/posts/profiles/${user}/posts/`
            : `$/profiles/${user}/${model.toLowerCase()}s/`,
          formData,
          { headers }
        )
        .then((res) => res)
        .catch((ex) => ex);

  if (res?.status === 200 || res?.status === 201) {
    return true;
  } else if (res.code === `ERR_NETWORK`) {
    error.push(`Cotal Backend`, res.code);
  } else if (res.response.status >= 400 && res.response.status < 500) {
    Object.entries(res.response.data).forEach((arr) => {
      error.push(arr[1]);
    });
  }

  if (error.length !== 0) return error;
}

export async function userCommentHandler({ user, slug, token, data }) {
  const headers = {
    Authorization: `Cotal ${token}`,
    'Content-Type': `multipart/form-data`,
  };

  const error = [];

  // Future feature to implement edit function to comments
  const res = data.id
    ? await http
        .put(
          `/posts/profiles/${user}/posts/${slug}/comments/${data.id}/`,
          data,
          { headers }
        )
        .then((res) => res)
        .catch((ex) => ex)
    : await http
        .post(`/posts/profiles/${user}/posts/${slug}/comments/`, data, {
          headers,
        })
        .then((res) => res)
        .catch((ex) => ex);

  if (res?.status === 200 || res?.status === 201) {
    return true;
  } else if (res.code === `ERR_NETWORK`) {
    error.push(`Cotal Backend`, res.code);
  } else if (res.response.status >= 400 && res.response.status < 500) {
    Object.entries(res.response.data).forEach((arr) => {
      error.push(`Comment`, arr[1][0]);
    });
  }

  if (error.length !== 0) return error;
}
