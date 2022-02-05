import axios from "axios";

export const getRegion = (region) => {
  return axios.get(`https://restcountries.com/v3.1/region/${region}`);
};
