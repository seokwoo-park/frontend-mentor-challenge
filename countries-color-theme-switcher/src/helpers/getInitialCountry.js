import axios from "axios";

export const getInitialCountry = (name) => {
  return axios.get(`https://restcountries.com/v3.1/name/${name}`);
};
