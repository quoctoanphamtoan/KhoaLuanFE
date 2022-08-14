import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { atcSinhVienXinNghiHoc } from "../../../../redux/actions/SinhVien";
import "./style.css";
import { FormatIndentDecreaseTwoTone } from "@material-ui/icons";
import { formatDateTime } from "../../../../utils/format/formatValues";
export default function XinNghiHoc() {
  document.title="Xin nghỉ học"
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state) => state.lopHocPhanSinhVienReducer,
    shallowEqual
  );
  const state = useSelector(
    (state) => state.donXinNghiHocOfSinhVienReducer,
    shallowEqual
  );
  const [dataApi, setDataApi] = useState({
    id: "",
    ngayNghi: "",
    lyDo: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setDataApi({ ...dataApi, [name]: value });
  };

  useEffect(() => {}, []);
  const parseDate = (str) => {
    let mdy = str.split("/");
    return new Date(mdy[2], mdy[1], mdy[0]);
  };
  const subMitData = (e) => {
    e.preventDefault();
    confirmAlert({
      title: "Lưu ý",
      message:
        "Nếu được duyệt bạn sẽ tính nghỉ học nữa buổi, nếu đủ 3 buổi bạn bị cấm thi , bạn đã chắc chắn! ",
      buttons: [
        {
          label: "Có",
          onClick: () => {
            if(dataApi.ngayNghi==""||new Date(Date.now()).getTime()>=new Date(dataApi.ngayNghi).getTime())
            {
              window.alert("Ngày nghỉ phải lớn hơn ngày hiện tại!")
              return;
            }  
            if(dataApi.lyDo===""){
              window.alert("Phải có lý do!")
              return;
            }
            if(dataApi.id==""){
              window.alert("Chọn lớp học phần!")
              return;
            }
            dispatch(atcSinhVienXinNghiHoc(dataApi));
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
  const show =(item)=>{
    console.log(item);
    confirmAlert({
      title: "Nội dung",
      message:
        item.noiDung,
      buttons: [
        {
          label: "Đóng",
          onClick: () => {
            return;
          },
          className: "btn btn-primary",
        },
        
      ],
    });
  }

  return (
    <div className="don-xin-nghi-hoc">
      <div className="col-md-6" style={{ border: "1px solid #e0e0eb" }}>
        <div className="danh-sach-don-nghi-hoc-sinh-vien">
          <h5 style={{ textAlign: "center" }}>DANH SÁCH ĐƠN NGHỈ HỌC</h5>
          <br></br>
          <br></br>
          <div
            className="table-wrapper-scroll-y my-custom-scrollbar"
            style={{ height: "500px" }}
          >
            <table className="table table table-bordered table-striped mb-0">
              <thead style={{ backgroundColor: "skyblue" }}>
                <tr>
                  <th>STT</th>
                  <th>Lớp học phần</th>
                  <th>Ngày nghỉ</th>
                  <th>Lý do</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {state ? (
                  state.data.map((item, index) => {
                    return (
                      <tr key={item.idDonXinNghiHoc} 
                      
                      onClick={()=>show(item)}
                      
                      >
                        <td>{index + 1}</td>
                        <td>{item.tenLopHocPhan}</td>
                        <td>{formatDateTime(item.ngayNghi)}</td>
                        <td>{`${item.noiDung.slice(0,20)}......xem thêm`}</td>
                        <td>
                          {item.trangThai ? "Được chấp nhận" : "Đang chờ"}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="col-md-6"
        style={{ marginLeft: "10px", border: "1px solid #e0e0eb" }}
      >
        <h5
          style={{ textAlign: "center", marginBottom: "10%", marginTop: "1%" }}
        >
          ĐƠN XIN NGHỈ HỌC
        </h5>
        <form className="form-card" onSubmit={subMitData}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-control-label px-3">
                  Lớp học phần <span className="text-danger"> *</span>
                </label>
                <select
                  className="form-select form-control"
                  selected
                  name="id"
                  defaultValue={-1}
                  aria-label="Default select example"
                  style={{
                    height: "45px",
                    borderColor: "#b8b894",
                    borderRadius: "0.3rem",
                  }}
                  onChange={onChange}
                >
                  <option value={-1}>Chọn lớp học phần</option>
                  {data ? (
                    data.map((lopHocPhan) => {
                      return (
                        <option
                          key={lopHocPhan.idSinhVienLopHocPhan}
                          value={lopHocPhan.idSinhVienLopHocPhan}
                        >{`${lopHocPhan.tenLopHocPhan}-${lopHocPhan.soNgayNghiPhep}P-${lopHocPhan.soNgayNghiKhongPhep}KP`}</option>
                      );
                    })
                  ) : (
                    <option value={0}>...</option>
                  )}
                </select>
              </div>
            </div>
            <div className="col-md-6 form-group">
              <label className="form-control-label px-3">
                Ngày nghỉ học <span className="text-danger"> *</span>
              </label>
              <input
                className="form-control"
                name="ngayNghi"
                onChange={onChange}
                type="date"
                id="fname"
              />
            </div>
            <div className="form-group col-md-12 flex-column d-flex">
              <label className="form-control-label px-3">
                Lý do<span className="text-danger"> *</span>
              </label>
              <textarea name="lyDo" onChange={onChange} id="ans" rows={5} />
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="form-group col-md-12">
              <button
                type="submit"
                className="btn-block btn-primary"
                style={{ width: "30%", marginLeft: "70%" }}
              >
                Gửi đơn
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
