import axios from "axios";

// axios.defaults.baseURL =
//   "https://geo.ipify.org/api/v2/country,city?apiKey=at_1jdkoikuETDrixzHgNk2msGWD7kgn&ipAddress=";

export const getLocation = (ip) => {
  return axios.get(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_1jdkoikuETDrixzHgNk2msGWD7kgn&ipAddress=${ip}`
  );
};
