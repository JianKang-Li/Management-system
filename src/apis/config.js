import axios from "axios"

const mock1 = axios.create({
  baseURL: "https://proapi.azurewebsites.net//api/"
})

mock1.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export const mock2 = axios.create({
  baseURL: "https://api.wirespec.dev/wirespec/sampleresponses"
})


mock2.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


export default mock1
