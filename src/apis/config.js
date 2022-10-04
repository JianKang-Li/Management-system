import axios from "axios"

const mack1 = axios.create({
  baseURL: "https://proapi.azurewebsites.net//api/"
})

mack1.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export const mack2 = axios.create({
  baseURL: "https://api.wirespec.dev/wirespec/sampleresponses"
})

mack2.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default mack1
