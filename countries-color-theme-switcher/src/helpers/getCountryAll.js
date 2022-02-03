import axios from "axios";

export const getCountryAll = () => {
  return axios.get("https://restcountries.com/v3.1/all");
};
