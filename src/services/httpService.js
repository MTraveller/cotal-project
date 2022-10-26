import axios from 'axios';
import { toast } from 'react-toastify';

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
