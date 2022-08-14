import React, { useState } from "react";
import Navbar from "../../component/navbar";
import { confirmAlert } from "react-confirm-alert";
import "./style.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useDispatch } from "react-redux";
import { atcChangePassword } from "../../redux/actions/TaiKhoan";
export default function DoiMatKhau(props) {
  document.title = "Đổi mật khẩu"

  const dispatch = useDispatch();
  const getRoleByPathName = () => {
    const { pathname } = props.history.location;
    let pathnameSplit = pathname.split("/")[1]
    if (pathnameSplit === "sinhvien") {
      return "SINH_VIEN"
    }
    if (pathnameSplit === "giangvien") {
      return "GIANG_VIEN";
    }
    if (pathnameSplit === "phuhuynh") {
      return "PHU_HUYNH";
    }

    return false;
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setDataPassword({ ...dataPassword, [name]: value });
  }
 
  const [dataPassword,setDataPassword] = useState({
    id:localStorage.getItem("id"),
    role:getRoleByPathName(),
    password:"",
    newPassword:"",
    confirmPassword:""
  })


  const handleDoiMatKhau = () => {
    confirmAlert({
      title: "Lưu ý",
      message:
        `Bạn có muốn đổi mật khẩu! `,
      buttons: [
        {
          label: "Có",
          onClick: () => {
            dispatch(atcChangePassword(dataPassword))
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

  }
  return (
    <div className="doi-mat-khau">
      <h2 style={{ textAlign: "center", textTransform: 'uppercase' }}>Đổi mật khẩu</h2>
      <div className="container">
        <div className="row">

          <div className="col-sm-8" style={{ marginLeft: '20%', marginTop: '5%' }}>

            <div className="form-group pass_show">
              <label>Mật khẩu hiện tại:</label><span className="text-danger">*</span>
              <input
                type="password"
                defaultValue=""
                name="password"
                className="form-control"
                placeholder="Mật khẩu cũ"
                onChange={onChange}
              />
            </div>

            <div className="form-group pass_show">
              <label>Mật khẩu mới</label><span className="text-danger">*</span>
              <input
                type="password"
                defaultValue=""
                name="newPassword"
                className="form-control"
                placeholder="Mât khẩu mới"
                onChange={onChange}
              />
            </div>

            <div className="form-group pass_show">
              <label>Xác nhận mật khẩu mới</label><span className="text-danger">*</span>
              <input
                type="password"
                defaultValue=""
                name="confirmPassword"
                className="form-control"
                placeholder="Xác nhận mật khẩu"
                onChange={onChange}
              />
            </div>
            <button style={{ float: "right" }} className="btn btn-primary" onClick={handleDoiMatKhau}>Đổi mật khẩu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
