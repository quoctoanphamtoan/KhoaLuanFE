import { chinhSuaThongTinApi, getDiemSinhVienSinhVienApi, getDonXinNghiHocApi, getLopHocPhanSinhVienApi, getThongBaoSinhVienApi, postSinhVienXinNghiHocApi, XemThongTinApi } from "../../api/SinhVienApi";
import { CHINHSUATHONGTINSINHVIEN_FAILED, CHINHSUATHONGTINSINHVIEN_SUCCESS, GETDIEMSINHVIEN_FAILED, GETDIEMSINHVIEN_SUCCESS, GETDONXINNGHIHOC_OFSINHVIEN_FAILED, GETDONXINNGHIHOC_OFSINHVIEN_SUCCESS, GETLOPHOCPHANSINHVIEN_FAILED, GETLOPHOCPHANSINHVIEN_SUCCESS, GETTHONGBAOSINHVIEN_FAILED, GETTHONGBAOSINHVIEN_SUCCESS, XEMTHONGTINSINHVIEN_FAILED, XEMTHONGTINSINHVIEN_SUCCESS } from "../constants/SinhVienConstants";
import { displayLoading, hideLoading } from "./Loading";
import { displayNotify } from "./Notify";

//atcXemthong tin

export const atcXemThongTinSinhVien = (id) => {
  return (dispatch) => {
    // dispatch(displayLoading());
    XemThongTinApi(id)
      .then((res) => { 
        dispatch(xemThongTinSuccess(res))
        // dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(xemThongTinFailed(err))
        // dispatch(hideLoading());
        dispatch(displayNotify({message:'Xin thử lại!',type:'warning'}));

      });
  };
};


const xemThongTinSuccess = (res) => {
  return {
    type: XEMTHONGTINSINHVIEN_SUCCESS,
    payload: res.data
  }
}


const xemThongTinFailed = (err) => {
  return {
    type: XEMTHONGTINSINHVIEN_FAILED,
    payload: err
  }
}


// ChinhSua sinh vien

export const atcChinhSuaThongTinSinhVien = (data, histrory) => {
  return (dispatch) => {
    dispatch(displayLoading());
    chinhSuaThongTinApi(data)
      .then((res) => {
        dispatch(chinhSuaThongTinSuccess(data))
        dispatch(hideLoading()); 
        dispatch(displayNotify({message:'Chỉnh sửa thành công!',type:'success'}));

      })
      .catch((err) => {
        dispatch(chinhSuaThongTinFailed(err))
        dispatch(hideLoading());
        dispatch(displayNotify({message:'Chỉnh sửa thất bại!',type:'warning'}));

      });
  };
};


const chinhSuaThongTinSuccess = (data) => {
  return {
    type: CHINHSUATHONGTINSINHVIEN_SUCCESS,
    payload: data
  }
}


const chinhSuaThongTinFailed = (err) => {
  return {
    type: CHINHSUATHONGTINSINHVIEN_FAILED,
    payload: err
  }
}






export const atcGetThongBao=(id,pageNumber)=>{
  return (dispatch) => {
    dispatch(displayLoading());
    getThongBaoSinhVienApi(id,pageNumber)
      .then((res) => {
        dispatch(getThongBaosSuccess(res))
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getThongBaoFailed(err))
        dispatch(hideLoading());
        dispatch(displayNotify({message:'Lấy dữ liệu thất bại! Xin load lại trang!',type:'warning'}));

      });
  };
}

const getThongBaosSuccess = (res) => {
  return {
    type: GETTHONGBAOSINHVIEN_SUCCESS,
    payload: res.data
  }
}


const getThongBaoFailed = (err) => {
  return {
    type: GETTHONGBAOSINHVIEN_FAILED,
    payload: err
  }
}













export const atcGetDiem=(id)=>{
  return (dispatch) => {
    dispatch(displayLoading());
    getDiemSinhVienSinhVienApi(id)
      .then((res) => {
        dispatch(getDiemsSuccess(res))
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getDiemFailed(err))
        dispatch(hideLoading());
        dispatch(displayNotify({message:'Lấy dữ liệu thất bại! Xin load lại trang!',type:'warning'}));

      });
  };
}

const getDiemsSuccess = (res) => {
  return {
    type: GETDIEMSINHVIEN_SUCCESS,
    payload: res.data
  }
}


const getDiemFailed = (err) => {
  return {
    type: GETDIEMSINHVIEN_FAILED,
    payload: err
  }
}





export const atcGetLopHocPhanSinhVien=(id)=>{
  return (dispatch) => {
    dispatch(displayLoading());
    getLopHocPhanSinhVienApi(id)
      .then((res) => {
        dispatch(getLopHocPhanSinhVienSuccess(res))
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getLopHocPhanSinhVienFailed(err))
        dispatch(hideLoading());
        dispatch(displayNotify({message:'Lấy dữ liệu thất bại! Xin load lại trang!',type:'warning'}));

      });
  };
}

const getLopHocPhanSinhVienSuccess = (res) => {
  return {
    type: GETLOPHOCPHANSINHVIEN_SUCCESS,
    payload: res.data
  }
}


const getLopHocPhanSinhVienFailed = (err) => {
  return {
    type: GETLOPHOCPHANSINHVIEN_FAILED,
    payload: err
  }
}





export const atcSinhVienXinNghiHoc=(data)=>{
  return (dispatch) => {
    dispatch(displayLoading());
    postSinhVienXinNghiHocApi(data)
      .then((res) => {
        dispatch(displayNotify({message:'Gửi thành công!',type:'success'}));
        dispatch(atcGetLopHocPhanSinhVien(localStorage.getItem("id")))
        dispatch(atcGetDonXinNghiHoc(localStorage.getItem("id")))
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getLopHocPhanSinhVienFailed(err))
        dispatch(hideLoading());
        dispatch(displayNotify({message:'Xin không thành công!',type:'warning'}));

      });
  };
}





export const atcGetDonXinNghiHoc=(id,pageNumber)=>{
  return (dispatch) => {
    dispatch(displayLoading());
    getDonXinNghiHocApi(id,pageNumber)
      .then((res) => { 
        dispatch(getDonXinNghiHocSuccess(res))
        dispatch(hideLoading());
      })
      .catch((err) => { 
        dispatch(hideLoading());
        dispatch(getDonXinNghiHocFailed(err));
        dispatch(displayNotify({message:'Lấy dữ liệu thất bại! Xin load lại trang!',type:'warning'}));

      });
  };
}

const getDonXinNghiHocSuccess = (res) => {
  return {
    type: GETDONXINNGHIHOC_OFSINHVIEN_SUCCESS,
    payload: res.data
  }
}


const getDonXinNghiHocFailed = (err) => {
  return {
    type: GETDONXINNGHIHOC_OFSINHVIEN_FAILED,
    payload: err
  }
}