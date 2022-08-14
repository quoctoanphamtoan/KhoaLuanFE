import axios from "axios";
import FormData from 'form-data';
import { BASE_URL_API } from "./../constants/ApiConstant";
const DangNhapApi = (params) => { 
  return axios({
    method: "POST",
    url: BASE_URL_API + "api/solienlacdientu/v1/taikhoan/dangnhap",
    data: {
      tenDangNhap: params.tenDangNhap,
      matKhau: params.matKhau,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const CheckAuthApi = (params) => {
  return axios({
    method: "POST",
    url: BASE_URL_API + "api/solienlacdientu/v1/taikhoan/checkauth",
    data: {
      token: params.token,
      id: params.id,
    },
  });
};

export const changePasswordApi = (data) => {
  return axios({
    method: "PUT",
    url: BASE_URL_API + "api/solienlacdientu/v1/taikhoan/doimatkhau",
    data: data,
  });
};
export const changeImgUrlApi = (file) => {
  let data =new FormData();
  data.append("file",file,file.name)
  return axios({
    method: "PUT",
    url: `${BASE_URL_API}api/solienlacdientu/v1/taikhoan/avatar/${localStorage.getItem(
      "id"
    )}`,
    data:data ,
    headers: {
      'accept': 'application/json',
      "Content-Type": "multipart/form-data",
    },
  });
};

export { DangNhapApi };

