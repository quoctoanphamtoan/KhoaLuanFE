import { BASE_URL_API } from "./../constants/ApiConstant";
import axiosClient from './axiosClient';

const XemThongTinApi = async (id) => {
  return (await axiosClient())({
    method: 'GET',
    url: BASE_URL_API + "api/solienlacdientu/v1/sinhvien/thongtin/" + id,


  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

const chinhSuaThongTinApi = async (data) => {
  return (await axiosClient())({
    method: 'PUT',
    url: `${BASE_URL_API}api/solienlacdientu/v1/sinhvien/thongtin/${localStorage.getItem("id")}`,
    data: data,

  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

const getThongBaoSinhVienApi = async (id,page) => {
  return (await axiosClient())({
    method: 'GET',
    url: `${BASE_URL_API}api/solienlacdientu/v1/sinhvien/${id}/thongbaos`,
    params: { page: page, size: 5 }
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}


const getDiemSinhVienSinhVienApi = async (id) => {
  return (await axiosClient())({
    method: 'GET',
    url: `${BASE_URL_API}api/solienlacdientu/v1/sinhvien/${id}/diem`
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}



const getLopHocPhanSinhVienApi = async (id) => {
  return (await axiosClient())({
    method: 'GET',
    url: `${BASE_URL_API}api/solienlacdientu/v1/sinhvien/${id}/lophocphan`
  })
    .then((response) => { 
      return response;
    })
    .catch((error) => {
      throw error;
    });
}


const postSinhVienXinNghiHocApi = async (data) => {
  return (await axiosClient())({
    method: 'POST',
    url: `${BASE_URL_API}api/solienlacdientu/v1/sinhvien/donxinnghihoc`,
    data:data
  })
    .then((response) => { 
      return response;
    })
    .catch((error) => {
      throw error;
    });
}


const getDonXinNghiHocApi = async (idSinhVien) => {
  return (await axiosClient())({
    method: 'GET',
    url: `${BASE_URL_API}api/solienlacdientu/v1/sinhvien/${idSinhVien}/donxinnghihoc`,
  })
    .then((response) => { 
      return response;
    })
    .catch((error) => {
      throw error;
    });
}
export {
  XemThongTinApi,
  chinhSuaThongTinApi,
  getThongBaoSinhVienApi,
  getDiemSinhVienSinhVienApi,
  getLopHocPhanSinhVienApi,
  postSinhVienXinNghiHocApi,
  getDonXinNghiHocApi
};
// localhost:8082/api/solienlacdientu/v1/sinhvien/2/diem