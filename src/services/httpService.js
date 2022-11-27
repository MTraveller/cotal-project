import axios from 'axios';

axios.defaults.baseURL = `${process.env.GATSBY_API_URL}`;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

// prettier-ignore
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  
  if (!expectedError) {
    // TODO: hookup to sentry to capture all unexpected errors!
  }
  
  return Promise.reject(error);
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
