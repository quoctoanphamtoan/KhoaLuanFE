import axios from 'axios';
import jwt_decode from 'jwt-decode'; 
import { BASE_URL_API,REFRESH_TOKEN } from '../constants/ApiConstant';

const axiosClient = async () => {
  const token = await localStorage.getItem('AccessToken');
  const checkToken = (token) => {
    let date = new Date().getTime() / 1000;
    let expToken = jwt_decode(token).exp;
    if (expToken > date) {
      return true;
    }
    return false;
  };

  const axiosOption = axios.create({
    baseURL: BASE_URL_API,
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  axiosOption.interceptors.request.use(
    async (config) => {
    
      if (!checkToken(token)) {
        await axios({
          method: 'POST',
          url: REFRESH_TOKEN,
          params: {
            token: token,
          },
        })
          .then(async (response) => {
            await localStorage.setItem('AccessToken', response.data.token);
            config.headers = {
              'content-type': 'application/json',
              Authorization: 'Bearer ' + response.data.token,
            };
          })
          .catch((error) => { 
          });

        return config;
      }
      return config;
    } ,
    (error) => {
      Promise.reject(error);
    },
  );
  return axiosOption;
};
export default axiosClient;