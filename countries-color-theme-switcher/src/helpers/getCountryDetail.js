import axios from "axios";

export const getCountryDetail = (id) => {
  return axios.get(`https://restcountries.com/v3.1/alpha?codes=${id}`);
};
