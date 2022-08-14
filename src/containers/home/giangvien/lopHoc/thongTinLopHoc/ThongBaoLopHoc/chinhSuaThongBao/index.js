import { React, useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useDispatch } from "react-redux";
import {
  atcAddThongBaoSinhViensLopHoc,
  atcEditThongBaoSinhViensLopHoc,
} from "../../../../../../../redux/actions/GiangVien";
import { displayNotify } from "../../../../../../../redux/actions/Notify";
import "./style.css";
export default function ChinhSuaThongBao(props) {
  const dispatch = useDispatch();
  const { itemEdit, id } = props;

  const [dataThongBao, setDataThongBao] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataThongBao({ ...dataThongBao, [name]: value }); 
  };
  const [isEdit, setIsEdit] = useState(false);

  const handleChinhSua = () => {
    confirmAlert({
      title: "Lưu ý",
      message:
        "Bạn có muốn chỉnh sửa, thông báo này sẽ gởi cho tất cả sinh viên trong lớp học này! ",
      buttons: [
        {
          label: "Có",
          onClick: () => {
            dispatch(
              atcEditThongBaoSinhViensLopHoc(
                itemEdit.id,
                props.id,
                dataThongBao
              )
            );
          },
          className: "btn btn-primary",
        },
        {
          label: "Không",
          onClick: () => {
            return;
          },
          className: "btn btn-primary btn-sm",
        },
      ],
    });
  };

  const handleLamMoi = () => {
    setDataThongBao({ tieuDe: "", noiDung: "" });
  };
  useEffect(() => {
    if (itemEdit) {
      setIsEdit(true); 
      setDataThongBao(itemEdit);
    }
  }, [itemEdit]);

  const themThongBao = () => {
    confirmAlert({
      title: "Lưu ý",
      message:
        "Bạn có muốn lưu, thông báo này sẽ gởi cho tất cả sinh viên trong lớp học này! ",
      buttons: [
        {
          label: "Có",
          onClick: () => {  
            if(dataThongBao.noiDung===""||dataThongBao.tieuDe===""){
              dispatch(
                displayNotify({ message: "Thông tiêu đề và nội dung không được rỗng!", type: "warning" })
              );
              return;
            }
            dispatch(atcAddThongBaoSinhViensLopHoc(props.id, dataThongBao));
          },
          className: "btn btn-primary",
        },
        {
          label: "Không",
          onClick: () => {
            return;
          },
          className: "btn btn-primary btn-sm",
        },
      ],
    });
  };

  return (
    <>
      <div className="form-card">
        <div className="row justify-content-between text-left">
          <div className="form-group col-sm-12 flex-column d-flex">
            <label className="form-control-label px-3">
              Tiêu đề<span className="text-danger"> *</span>
            </label>
            <textarea
              id="lname"
              name="tieuDe"
              placeholder="Nhập tiêu đề"
              value={dataThongBao.tieuDe}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-sm-12 flex-column d-flex">
            <label className="form-control-label px-3">
              Nội dung<span className="text-danger"> *</span>
            </label>
            <textarea
              id="lname"
              name="noiDung"
              placeholder="Nhập nội dung"
              rows="5"
              value={dataThongBao.noiDung}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="footer-thongbao">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={themThongBao}
            style={{ display: isEdit ? "none" : "block" }}
          >
             Gửi thông báo
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={{ display: isEdit ? "none" : "block" }}
            onClick={handleLamMoi}
          >
            Làm mới
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={{ display: isEdit ? "block" : "none" }}
            onClick={handleChinhSua}
          >
            Gửi thông báo
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={{ display: isEdit ? "block" : "none" }}
            onClick={() => {
              setIsEdit(false);
              handleLamMoi();
            }}
          >
            Hủy bỏ
          </button>
        </div>
      </div>
    </>
  );
}
