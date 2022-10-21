import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = `${apiUrl}/auth/jwt/create`;

export function login(email, password) {
  return http.post(apiEndpoint, {
    email: email,
    password: password,
  });
}
