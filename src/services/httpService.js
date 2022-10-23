import axios from 'axios';
import { toast } from 'react-toastify';

// prettier-ignore
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  
  if (!expectedError) {
    toast.error(
      "Woah.. An unexpected error, please try again! Contact us if the issue persists: https://cotal.com/contact"
    );
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
