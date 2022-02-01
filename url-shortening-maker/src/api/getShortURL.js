import axios from "axios";

export const getShortURL = (url) => {
  const baseURL = `https://api.shrtco.de/v2/shorten?url=${url}`;
  return axios.get(baseURL);
};
