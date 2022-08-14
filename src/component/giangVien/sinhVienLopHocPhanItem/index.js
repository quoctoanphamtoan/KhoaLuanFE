import React from "react";
import { useDispatch } from "react-redux";
import {
  atcGetCanhBaoSinhViensLopHoc,
  atcGetNgayNghiSinhVien,
} from "../../../redux/actions/GiangVien";

export default function SinhVienLopHocPhanItem(props) {
  const {
    diemSinhVienMonHocDto,
    hoTen,
    maSV,
    id,
    soNgayNghiKhongPhep,
    soNgayNghiPhep,
    trangThai,
    idSvLhp,
  } = props.item;
  const dispatch = useDispatch();
  const handleDiemDanh = () => {
    props.getIdItem(id);
    props.getIdSvLhp(idSvLhp);

    dispatch(atcGetNgayNghiSinhVien(idSvLhp));
  };
  const setColorWarning = () => {
    return true?trangThai:false
  };
  const openModalCanhBao = () => {
    dispatch(atcGetCanhBaoSinhViensLopHoc(props.item.id));
    props.getIdItem(id);
    props.returnItem(props.item);
  };
  return (
    <>
      <tr
        style={{
          backgroundColor: !setColorWarning() ? "#ff99c2" : "",
        }}
      >
        <td>{props.index + 1}</td>
        <td>{maSV}</td>
        <td>{hoTen}</td>
        <td>
          {diemSinhVienMonHocDto.tk1 > 0 ? diemSinhVienMonHocDto.tk1 : "-"}
        </td>
        <td>
          {diemSinhVienMonHocDto.tk2 > 0 ? diemSinhVienMonHocDto.tk2 : "-"}
        </td>
        <td>
          {diemSinhVienMonHocDto.tk3 > 0 ? diemSinhVienMonHocDto.tk3 : "-"}
        </td>
        <td>{diemSinhVienMonHocDto.gk > 0 ? diemSinhVienMonHocDto.gk : "-"}</td>
        <td>{diemSinhVienMonHocDto.ck > 0 ? diemSinhVienMonHocDto.ck : "-"}</td>
        <td>
          {Math.round(diemSinhVienMonHocDto.tbc * 100) / 100 > 0
            ? Math.round(diemSinhVienMonHocDto.tbc * 100) / 100
            : "-"}
        </td>
        <td style={{ textAlign: "center" }}>{soNgayNghiPhep}</td>
        <td style={{ textAlign: "center" }}>{soNgayNghiKhongPhep}</td>
        <td>{trangThai ? "Đang học" : "Cấm thi"}</td>
        <td style={{ textAlign: "left" }}>
          <button
            className="btn btn-link"
            onClick={openModalCanhBao}
            data-toggle="modal"
            data-target="#modelId"
            style={{ color: "red", height: "20px" }}
          >
            Cảnh báo
          </button>
          <br></br>
          {/* <button
            className="btn btn-link"
            style={{ color: "skyblue", height: "20px" }}
            data-toggle="modal"
            data-target="#modelNhapDiem"
            onClick={() => {
              props.getIdItem(id);
            }}
          >
            Nhập điểm
          </button> */}
          <br />
          <button
            className="btn btn-link"
            data-toggle="modal"
            data-target="#modalSoNgayNghiPhep"
            onClick={handleDiemDanh}
            style={{display:diemSinhVienMonHocDto.ck > 0 ?'none':'block'}}
          >
            Điểm danh
          </button>
        </td>
      </tr>
    </>
  );
}
