import { combineReducers } from "redux";
import loadingReducer from "./Loading/LoadingReducer";
import sinhVienReducer from "./SinhVien/SinhVienReducer";
import sinhViensLopHocReducer from "./SinhVien/SinhVienLopHocReducer";
import taiKhoanReducer from "./TaiKhoan/LoginReducer";
import thongBaoReducer from "./ThongBao/thongBaoReducer";
import thongBaoSinhVienLopHocReducer from "./ThongBao/thongBaoSinhVienLopHocReducer";
import thongBaoSinhVienLopHocPhanReducer from "./ThongBao/thongBaoSinhVienLopHocPhanReducer";
import canhBaoSinhVienOfGiangVienReducer from "./CanhBao/canhBaoSinhVienOfGiangVienReducer";
import lopHocReducer from "./LopHoc/LopHocReducer";
import lopHocPhanReducer from "./LopHocPhan/lopHocPhanReducer";
import lopHocPhanSinhVienReducer from "./LopHocPhan/lopHocPhanSinhVienReducer";
import NotifyReducer from "./notify/NotifyReducer";
import sinhViensLopHocPhanReducer from "./SinhVien/sinhVienLopHocPhanReducer";
import diemReducer from "./DiemReducer/DiemReducer";
import ngayNghiSinhVienReducer from "./ngayNghi/ngayNghiSinhVienReducer";
import donXinNghiHocReducer from "./ngayNghi/donXinNghiHocReducer";
import donXinNghiHocOfSinhVienReducer from "./ngayNghi/donXinNghiHocOfSinhVienReducer";
 
const reducer = combineReducers({
  loadingReducer,
  sinhVienReducer,
  taiKhoanReducer,
  thongBaoReducer,
  lopHocReducer,
  sinhViensLopHocReducer,
  thongBaoSinhVienLopHocReducer,
  canhBaoSinhVienOfGiangVienReducer,
  NotifyReducer,
  lopHocPhanReducer,
  sinhViensLopHocPhanReducer,
  diemReducer,
  ngayNghiSinhVienReducer,
  lopHocPhanSinhVienReducer,
  thongBaoSinhVienLopHocPhanReducer,
  donXinNghiHocReducer,
  donXinNghiHocOfSinhVienReducer
});

export default reducer;
