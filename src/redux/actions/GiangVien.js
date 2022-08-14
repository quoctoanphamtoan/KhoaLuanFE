import {
  addThongBaoLopHocApi,
  addThongBaoLopHocPhanApi,
  chapNhanDonXinNghiHocApi,
  diemDanhApi,
  editDisplayThongBaoLopHocApi,
  editThongBaoLopHocApi,
  getDonXinNghiHocApi,
  getListCanhBaoSinhVienApi,
  getLopHocApi,
  getLopHocPhanApi,
  getNgayNghiSinhVienApi,
  getSinhVienLopHocApi,
  getSinhVienLopHocPhanApi,
  getThongBaotSinhVienLopHocApi,
  getThongBaotSinhVienLopHocPhanApi,
  guiCanhBaoSinhVienApi,
  putBangDiemSinhVienMonHocApi,
  xoaNgayNghiSinhVienApi,
} from "../../api/GiangVienApi";
import {
  ADDTHONGBAOSINHVIENS_LOPHOCPHAN_FAILED,
  ADDTHONGBAOSINHVIENS_LOPHOCPHAN_SUCCESS,
  ADDTHONGBAOSINHVIENS_LOPHOC_FAILED,
  ADDTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
  CANHBAO_SINHVIEN_FAILED,
  CANHBAO_SINHVIEN_SUCCESS,
  EDITTHONGBAOSINHVIENS_LOPHOCPHAN_FAILED,
  EDITTHONGBAOSINHVIENS_LOPHOCPHAN_SUCCESS,
  EDITTHONGBAOSINHVIENS_LOPHOC_FAILED,
  EDITTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
  GETDANHSACH_LOPHOCPHAN_FAILED,
  GETDANHSACH_LOPHOCPHAN_SUCCESS,
  GETDANHSACH_LOPHOC_FAILED,
  GETDANHSACH_LOPHOC_SUCCESS,
  GETDONXINNGHIHOC_FAILED,
  GETDONXINNGHIHOC_SUCCESS,
  GETNGAYNGHI_SINHVIEN_FAILED,
  GETNGAYNGHI_SINHVIEN_SUCCESS,
  GETSINHVIENS_LOPHOCPHAN_FAILED,
  GETSINHVIENS_LOPHOCPHAN_SUCCESS,
  GETSINHVIENS_LOPHOC_FAILED,
  GETSINHVIENS_LOPHOC_SUCCESS,
  GETTHONGBAOSINHVIENS_LOPHOCPHAN_FAILED,
  GETTHONGBAOSINHVIENS_LOPHOCPHAN_SUCCESS,
  GETTHONGBAOSINHVIENS_LOPHOC_FAILED,
  GETTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
  GET_CANHBAO_SINHVIEN_FAILED,
  GET_CANHBAO_SINHVIEN_SUCCESS,
} from "../constants/GiangVienConstants";
import { displayLoading, hideLoading } from "./Loading";
import { displayNotify } from "./Notify";

export const atcGetDanhSachLopHoc = (page) => {
  return (dispatch) => {
    dispatch(displayLoading());
    getLopHocApi(page)
      .then((res) => {
        dispatch(getDanhSachLopHocSuccess(res));
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getDanhSachLopHocFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({
            message: "Lấy dữ liệu thất bại! Xin hãy reload lại trang!",
            type: "warning",
          })
        );
      });
  };
};

const getDanhSachLopHocSuccess = (res) => {
  return {
    type: GETDANHSACH_LOPHOC_SUCCESS,
    payload: res.data,
  };
};

const getDanhSachLopHocFailed = (err) => {
  return {
    type: GETDANHSACH_LOPHOC_FAILED,
    payload: err,
  };
};

export const atcGetDanhSachLopHocPhan = (page) => {
  return (dispatch) => {
    dispatch(displayLoading());
    getLopHocPhanApi(page)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(getDanhSachLopHocPhanSuccess(res));
      })
      .catch((err) => {
        dispatch(getDanhSachLopHocPhanFailed(err));
        dispatch(
          displayNotify({
            message: "Lấy dữ liệu thất bại! Xin hãy reload lại trang!",
            type: "warning",
          })
        );
        dispatch(hideLoading());
      });
  };
};

const getDanhSachLopHocPhanSuccess = (res) => {
  return {
    type: GETDANHSACH_LOPHOCPHAN_SUCCESS,
    payload: res.data,
  };
};

const getDanhSachLopHocPhanFailed = (err) => {
  return {
    type: GETDANHSACH_LOPHOCPHAN_FAILED,
    payload: err,
  };
};

export const atcGetSinhViensLopHoc = (idLop, page) => {
  return (dispatch) => {
    dispatch(displayLoading());
    getSinhVienLopHocApi(idLop, page)
      .then((res) => {
        dispatch(getSinhViensLopHocSuccess(res));
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getSinhViensLopHocFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({
            message: "Lấy dữ liệu thất bại! Xin hãy reload lại trang!",
            type: "warning",
          })
        );
      });
  };
};

const getSinhViensLopHocSuccess = (res) => {
  return {
    type: GETSINHVIENS_LOPHOC_SUCCESS,
    payload: res.data,
  };
};

const getSinhViensLopHocFailed = (err) => {
  return {
    type: GETSINHVIENS_LOPHOC_FAILED,
    payload: err,
  };
};

export const atcGetSinhViensLopHocPhan = (idLopHocPhan, page) => {
  return (dispatch) => {
    dispatch(displayLoading());
    getSinhVienLopHocPhanApi(idLopHocPhan, page)
      .then((res) => {
        dispatch(getSinhViensLopHocPhanSuccess(res));
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getSinhViensLopHocPhanFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({
            message: "Lấy dữ liệu thất bại! Xin hãy reload lại trang!",
            type: "warning",
          })
        );
      });
  };
};

const getSinhViensLopHocPhanSuccess = (res) => {
  return {
    type: GETSINHVIENS_LOPHOCPHAN_SUCCESS,
    payload: res.data,
  };
};

const getSinhViensLopHocPhanFailed = (err) => {
  return {
    type: GETSINHVIENS_LOPHOCPHAN_FAILED,
    payload: err,
  };
};

export const atcGetThongBaoSinhViensLopHoc = (idLop, page) => {
  return (dispatch) => {
    dispatch(displayLoading());
    getThongBaotSinhVienLopHocApi(idLop, page)
      .then((res) => {
        dispatch(getThongBaoSinhViensLopHocSuccess(res));
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getThongBaoSinhViensLopHocFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({
            message: "Lấy dữ liệu thất bại! Xin hãy reload lại trang!",
            type: "warning",
          })
        );
      });
  };
};

const getThongBaoSinhViensLopHocSuccess = (res) => {
  return {
    type: GETTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
    payload: res.data,
  };
};

const getThongBaoSinhViensLopHocFailed = (err) => {
  return {
    type: GETTHONGBAOSINHVIENS_LOPHOC_FAILED,
    payload: err,
  };
};

export const atcAddThongBaoSinhViensLopHoc = (idLop, data) => {
  return (dispatch) => {
    dispatch(displayLoading());
    addThongBaoLopHocApi(idLop, data)
      .then((res) => {
        dispatch(addThongBaoSinhViensLopHocSuccess(res));
        dispatch(atcGetThongBaoSinhViensLopHoc(idLop, 0));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Thêm thành công!", type: "success" })
        );
      })
      .catch((err) => {
        dispatch(addThongBaoSinhViensLopHocFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({
            message: "Thêm thất bại! Xin hãy thử lại",
            type: "warning",
          })
        );
      });
  };
};

const addThongBaoSinhViensLopHocSuccess = (res) => {
  return {
    type: ADDTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
    payload: res.data,
  };
};

const addThongBaoSinhViensLopHocFailed = (err) => {
  return {
    type: ADDTHONGBAOSINHVIENS_LOPHOC_FAILED,
    payload: err,
  };
};

export const atcEditThongBaoSinhViensLopHoc = (idThongBao, idLop, data) => {
  return (dispatch) => {
    dispatch(displayLoading());
    editThongBaoLopHocApi(idThongBao, data)
      .then((res) => {
        dispatch(editThongBaoSinhViensLopHocSuccess(res));
        dispatch(atcGetThongBaoSinhViensLopHoc(idLop, 0));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Chỉnh sửa thành công!", type: "success" })
        );
      })
      .catch((err) => {
        dispatch(ediThongBaoSinhViensLopHocFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Chỉnh sửa thất bại!", type: "warning" })
        );
      });
  };
};

const editThongBaoSinhViensLopHocSuccess = (res) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
    payload: res.data,
  };
};

const ediThongBaoSinhViensLopHocFailed = (err) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOC_FAILED,
    payload: err,
  };
};

export const atcEditDisplayThongBaoSinhViensLopHoc = (idThongBao, idLop) => {
  return (dispatch) => {
    dispatch(displayLoading());
    editDisplayThongBaoLopHocApi(idThongBao)
      .then((res) => {
        dispatch(editDisplayThongBaoSinhViensLopHocSuccess(res));
        dispatch(atcGetThongBaoSinhViensLopHoc(idLop, 0));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Chỉnh sửa thành công!", type: "success" })
        );
      })
      .catch((err) => {
        dispatch(editDisplayThongBaoSinhViensLopHocFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Chỉnh sửa thất bại!", type: "warning" })
        );
      });
  };
};

const editDisplayThongBaoSinhViensLopHocSuccess = (res) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
    payload: res.data,
  };
};

const editDisplayThongBaoSinhViensLopHocFailed = (err) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOC_FAILED,
    payload: err,
  };
};

export const atcGetCanhBaoSinhViensLopHoc = (idSinhVien) => {
  return (dispatch) => {
    getListCanhBaoSinhVienApi(idSinhVien)
      .then((res) => {
        console.log(res);
        dispatch(getCanhBaoSinhVienOfGiangVienSuccess(res));
      })
      .catch((err) => {
        dispatch(getCanhBaoOfGiangVienFailed(err)); 
      });
  };
};

const getCanhBaoSinhVienOfGiangVienSuccess = (res) => {
  return {
    type: GET_CANHBAO_SINHVIEN_SUCCESS,
    payload: res.data,
  };
};

const getCanhBaoOfGiangVienFailed = (err) => {
  return {
    type: GET_CANHBAO_SINHVIEN_FAILED,
    payload: err,
  };
};

export const atcPostCanhBaoSinhViensLopHoc = (data) => {
  return (dispatch) => {
    guiCanhBaoSinhVienApi(data)
      .then((res) => {
        dispatch(canhBaoSinhVienSuccess(res));
        dispatch(atcGetCanhBaoSinhViensLopHoc(data.idSinhVien));
        dispatch(
          displayNotify({ message: "Thêm thành công!", type: "success" })
        );
      })
      .catch((err) => {
        dispatch(canhBaoSinhVienFailed(err));
        dispatch(displayNotify({ message: "Thêm thất bại!", type: "warning" }));
      });
  };
};

const canhBaoSinhVienSuccess = (res) => {
  return {
    type: CANHBAO_SINHVIEN_SUCCESS,
    payload: res.data,
  };
};

const canhBaoSinhVienFailed = (err) => {
  return {
    type: CANHBAO_SINHVIEN_FAILED,
    payload: err,
  };
};

export const atcChinhSuaBangDiem = (idlopHocPhan, idbangDiem, data) => {
  return (dispatch) => {
    dispatch(displayLoading());
    putBangDiemSinhVienMonHocApi(idbangDiem, data)
      .then((res) => {
        dispatch(displayLoading());
        dispatch(atcGetSinhViensLopHocPhan(idlopHocPhan, 0));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Chỉnh sửa thành công!", type: "success" })
        );
      })
      .catch((err) => {
        dispatch(getSinhViensLopHocPhanFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({
            message: "Chỉnh sửa không thành công!",
            type: "warning",
          })
        );
      });
  };
};

export const atcDiemDanh = (idSinhVien, idLopHocPhan, data, idSvLhp) => {
  return (dispatch) => {
    dispatch(displayLoading());
    diemDanhApi(idSinhVien, idLopHocPhan, data)
      .then((res) => {
        dispatch(displayLoading());
        dispatch(atcGetSinhViensLopHocPhan(idLopHocPhan, 0));
        dispatch(atcGetNgayNghiSinhVien(idSvLhp));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Thêm thành công!", type: "success" })
        );
      })
      .catch((err) => {
        // dispatch(getSinhViensLopHocPhanFailed(err))
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Thêm không thành công!", type: "warning" })
        );
      });
  };
};

export const atcGetNgayNghiSinhVien = (idSinhVienLopHocPhan) => {
  return (dispatch) => {
    getNgayNghiSinhVienApi(idSinhVienLopHocPhan)
      .then((res) => {
        dispatch(getNgayNghiSinhVienSuccess(res));
      })
      .catch((err) => {
        dispatch(getNgayNghiSinhVienFailed(err));
      });
  };
};

const getNgayNghiSinhVienSuccess = (res) => {
  return {
    type: GETNGAYNGHI_SINHVIEN_SUCCESS,
    payload: res.data,
  };
};

const getNgayNghiSinhVienFailed = (err) => {
  return {
    type: GETNGAYNGHI_SINHVIEN_FAILED,
    payload: err,
  };
};

export const atcXoaNgayNghiSinhVien = (
  id,
  idLopHocPhan,
  idSinhVienLopHocPhan
) => {
  return (dispatch) => {
    dispatch(displayLoading());
    xoaNgayNghiSinhVienApi(id)
      .then((res) => {
        dispatch(atcGetSinhViensLopHocPhan(idLopHocPhan, 0));
        dispatch(atcGetNgayNghiSinhVien(idSinhVienLopHocPhan));
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(hideLoading());
      });
  };
};

export const atcGetThongBaoSinhViensLopHocPhan = (idLopHocPhan, page) => {
  return (dispatch) => {
    dispatch(displayLoading());
    getThongBaotSinhVienLopHocPhanApi(idLopHocPhan, page)
      .then((res) => {
        dispatch(getThongBaoSinhViensLopHocPhanSuccess(res));
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getThongBaoSinhViensLopHocPhanFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({
            message: "Lấy dữ liệu thất bại! Xin hãy reload lại trang!",
            type: "warning",
          })
        );
      });
  };
};

const getThongBaoSinhViensLopHocPhanSuccess = (res) => {
  return {
    type: GETTHONGBAOSINHVIENS_LOPHOCPHAN_SUCCESS,
    payload: res.data,
  };
};

const getThongBaoSinhViensLopHocPhanFailed = (err) => {
  return {
    type: GETTHONGBAOSINHVIENS_LOPHOCPHAN_FAILED,
    payload: err,
  };
};

///////////////////////thong bao sinh vien lop hoc phan

export const atcAddThongBaoSinhViensLopHocPhan = (idLopHocPhan, data) => {
  return (dispatch) => {
    dispatch(displayLoading());
    addThongBaoLopHocPhanApi(idLopHocPhan, data)
      .then((res) => {
        dispatch(addThongBaoSinhViensLopHocPhanSuccess(res));
        dispatch(atcGetThongBaoSinhViensLopHocPhan(idLopHocPhan, 0));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Thêm thành công!", type: "success" })
        );
      })
      .catch((err) => {
        dispatch(addThongBaoSinhViensLopHocPhanFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({
            message: "Thêm thất bại! Xin hãy thử lại",
            type: "warning",
          })
        );
      });
  };
};

const addThongBaoSinhViensLopHocPhanSuccess = (res) => {
  return {
    type: ADDTHONGBAOSINHVIENS_LOPHOCPHAN_SUCCESS,
    payload: res.data,
  };
};

const addThongBaoSinhViensLopHocPhanFailed = (err) => {
  return {
    type: ADDTHONGBAOSINHVIENS_LOPHOCPHAN_FAILED,
    payload: err,
  };
};

export const atcEditThongBaoSinhViensLopHocPhan = (
  idThongBao,
  idLopHocPhan,
  data
) => {
  return (dispatch) => {
    dispatch(displayLoading());
    editThongBaoLopHocApi(idThongBao, data)
      .then((res) => {
        dispatch(editThongBaoSinhViensLopHocPhanSuccess(res));
        dispatch(atcGetThongBaoSinhViensLopHocPhan(idLopHocPhan, 0));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Chỉnh sửa thành công!", type: "success" })
        );
      })
      .catch((err) => {
        dispatch(ediThongBaoSinhViensLopHocPhanFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Chỉnh sửa thất bại!", type: "warning" })
        );
      });
  };
};

const editThongBaoSinhViensLopHocPhanSuccess = (res) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOCPHAN_SUCCESS,
    payload: res.data,
  };
};

const ediThongBaoSinhViensLopHocPhanFailed = (err) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOCPHAN_FAILED,
    payload: err,
  };
};

export const atcEditDisplayThongBaoSinhViensLopHocPhan = (
  idThongBao,
  idLopHocPhan
) => {
  return (dispatch) => {
    dispatch(displayLoading());
    editDisplayThongBaoLopHocApi(idThongBao)
      .then((res) => {
        dispatch(editDisplayThongBaoSinhViensLopHocPhanSuccess(res));
        dispatch(atcGetThongBaoSinhViensLopHocPhan(idLopHocPhan, 0));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Chỉnh sửa thành công!", type: "success" })
        );
      })
      .catch((err) => {
        dispatch(editDisplayThongBaoSinhViensLopHocPhanFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({ message: "Chỉnh sửa thất bại!", type: "warning" })
        );
      });
  };
};

const editDisplayThongBaoSinhViensLopHocPhanSuccess = (res) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOCPHAN_SUCCESS,
    payload: res.data,
  };
};

const editDisplayThongBaoSinhViensLopHocPhanFailed = (err) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOCPHAN_FAILED,
    payload: err,
  };
};

export const atcGetDonXinNghiHoc = (idGiangVien, idLopHocPhan, page) => {
  return (dispatch) => {
    dispatch(displayLoading());
    getDonXinNghiHocApi(idGiangVien, idLopHocPhan, page)
      .then((res) => {
        dispatch(getDonXinNghiHocSuccess(res));
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getDonXinNghiHocFailed(err));
        dispatch(hideLoading());
        dispatch(
          displayNotify({
            message: "Lấy dữ liệu thất bại! Xin hãy reload lại trang!",
            type: "warning",
          })
        );
      });
  };
};

const getDonXinNghiHocSuccess = (res) => {
  return {
    type: GETDONXINNGHIHOC_SUCCESS,
    payload: res.data,
  };
};

const getDonXinNghiHocFailed = (err) => {
  return {
    type: GETDONXINNGHIHOC_FAILED,
    payload: err,
  };
};

export const atcChapNhanDonXinNghiHoc = (
  idGiangVien,
  idDonXinNghiHoc,
  idLopHocPhan
) => {
  return (dispatch) => {
    dispatch(displayLoading());
    chapNhanDonXinNghiHocApi(idGiangVien, idDonXinNghiHoc)
      .then((res) => {
        dispatch(atcGetDonXinNghiHoc(idGiangVien, idLopHocPhan, 0));
        dispatch(atcGetSinhViensLopHocPhan(idLopHocPhan, 0));

        dispatch(hideLoading());
        dispatch(
          displayNotify({
            message: "Thành công!",
            type: "success",
          })
        );
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch(
          displayNotify({
            message: "Thất bại!",
            type: "warning",
          })
        );
      });
  };
};
