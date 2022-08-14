import { lazy } from "react";
import TrangChu from "./component/trangChu";
import SinhVien from "./containers/home/sinhvien/SinhVien";
import ThongBao from "./containers/home/sinhvien/thongBao";
import XemThongTin from "./containers/home/sinhvien/xemThongTin";
import XinNghiHoc from "./containers/home/sinhvien/xinNghiHoc";
import BangDiem from "./containers/home/sinhvien/bangDiem";
import Login from "./containers/login/Login";
import LopHocPhan from "./containers/home/giangvien/lopHocPhan";
import LopHoc from "./containers/home/giangvien/lopHoc";
import GiangVien from "./containers/home/giangvien/GiangVien";
import PhuHuynh from "./containers/home/phuhuynh/PhuHuynh";

const LoginRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "",
    component: Login,
    layout: "/taikhoan",
  },
];

const SinhVienRoutes = [
  {
    path: "",
    name: "Trang chủ",
    icon: "",
    component: TrangChu,
    layout: "/sinhvien",
    exact :true
  },
  {
    path: "/xemthongtin",
    name: "Thông tin cá nhân",
    //   icon: Dashboard,
    component: XemThongTin,
    layout: "/sinhvien",
    exact :false
  },
  {
    path: "/xinnghihoc",
    name: "Đơn xin nghỉ học",
    icon: "",
    component: XinNghiHoc,
    layout: "/sinhvien",
    exact :false
  },
  {
    path: "/bangdiem",
    name: "Kết quả học tập",
    icon: "",
    component: BangDiem,
    layout: "/sinhvien",
    exact :false
  },
  {
    path: "/thongbao",
    name: "",
    icon: <i className="fas fa-bell"></i>,
    component: ThongBao,
    layout: "/sinhvien",
    exact :false
  },
];

const GiangVienRoutes = [
  {
    path: "",
    name: "Trang chủ",
    icon: "",
    component: TrangChu,
    layout: "/giangvien",
    exact :true
  },
  {
    path: "/lophocphan",
    name: "Lớp học phần",
    icon: "",
    component: LopHocPhan,
    layout: "/giangvien",
    exact :false
  },
  {
    path: "/lophoc",
    name: "Lớp học",
    icon: "",
    component: LopHoc,
    layout: "/giangvien",
    exact :false
  },
];
const PhuHuynhRoutes = [
  {
    path: "",
    name: "Trang chủ",
    icon: "",
    component: TrangChu,
    layout: "/phuhuynh",
    exact :true
  },
  {
    path: "/xemthongtin",
    name: "Thông tin sinh viên",
    //   icon: Dashboard,
    component: XemThongTin,
    layout: "/phuhuynh",
    exact :false
  },
  {
    path: "/bangdiem",
    name: "Kết quả học tập",
    icon: "",
    component: BangDiem,
    layout: "/phuhuynh",
    exact :false
  },
  {
    path: "/thongbao",
    name: "",
    icon: <i className="fas fa-bell"></i>,
    component: ThongBao,
    layout: "/phuhuynh",
    exact :false
  },
];

const LayoutMain = [
  {
    path: "/sinhvien",
    component: SinhVien,
  },
  {
    path: "/giangvien",
    component: GiangVien,
    // routers:GiangV
  },
  {
    path: "/phuhuynh",
    component: PhuHuynh,
  },
  {
    path: "/login",
    component: Login,
  },
];

export {
  LayoutMain,
  SinhVienRoutes,
  LoginRoutes,
  GiangVienRoutes,
  PhuHuynhRoutes,
};
