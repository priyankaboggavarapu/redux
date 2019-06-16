import Axios from 'axios';

export const Options = {
  headers: {
    Authorization: 'auth token etc will go here',
  },
};

export const axiosGet = url => {
  return Axios.get(url, Options);
};

export const axiosPost = (url, payload) => {
  return Axios.post(url, payload, Options);
};
