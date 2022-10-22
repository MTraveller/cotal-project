import http from './httpService';

const apiEndpoint = `${process.env.API_URL}/auth/jwt/create`;

export function login(email, password) {
  return http.post(apiEndpoint, {
    email: email,
    password: password,
  });
}
