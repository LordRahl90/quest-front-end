let BASE_URL = 'http://127.0.0.1:8000/api';
if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'quest-backend';
}
// eslint-disable-next-line import/prefer-default-export
export const BACKEND = BASE_URL;
