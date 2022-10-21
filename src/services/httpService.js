import axios from "axios";
import { toast } from "react-toastify";

// prettier-ignore
axios.interceptors.response.use(null, error => {
  console.log("INTERCEPTOR CALLED!");
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  
  if (!expectedError) {
    toast.error("Woah.. An unexpected error, please try again!");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
