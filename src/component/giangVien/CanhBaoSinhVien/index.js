import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  atcGetCanhBaoSinhViensLopHoc,
  atcPostCanhBaoSinhViensLopHoc,
} from "../../../redux/actions/GiangVien";
import { displayNotify } from "../../../redux/actions/Notify";
import CanhBaoItem from "./DanhSachCanhBao/CanhBaoItem";
import "./style.css";
export default function CanhBaoSinhVien(props) {
  const { dataItem, idLopHocPhan } = props;
  console.log(dataItem);
  const dispatch = useDispatch();
  const [dataCanhBao, setDataCanhBao] = useState({
    idSinhVien: dataItem ? dataItem.id : "",
    idGiangVien: Number.parseInt(localStorage.getItem("id")),
    tieuDe: "",
    noiDung: "",
  });
  const state = useSelector((state) => state.canhBaoSinhVienOfGiangVienReducer);
  useEffect(() => {
    if (dataItem) {
      setDataCanhBao({
        ...dataCanhBao,
        idSinhVien: Number.parseInt(dataItem.id),
      });
      dispatch(atcGetCanhBaoSinhViensLopHoc(dataItem.id));
    }
  }, [dataItem]);

  const onChangeCanhBao = (e) => {
    const { name, value } = e.target;
    setDataCanhBao({ ...dataCanhBao, [name]: value });
  };

  const postCanhBao = (e) => {
    e.preventDefault();
    console.log(dataItem);

    console.log(dataCanhBao);
    if (
      !window.confirm(
        "Việc gởi cảnh này sẽ gởi sms cho sinh viên và phụ huynh, bạn đã chắc chắn?"
      )
    ) {
      return;
    }
    if (dataCanhBao.tieuDe === "" || dataCanhBao.noiDung === "") {
      dispatch(
        displayNotify({
          message: "tiêu đề và nội dung không được rỗng!",
          type: "warning",
        })
      );
      return;
    }
    dispatch(atcPostCanhBaoSinhViensLopHoc(dataCanhBao));
  };

  return (
    <div className="canh-bao">
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Quản lý cảnh báo sinh viên</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" style={{padding:'3%'}}>
              <div className="row">
                <div className="col-md-6" style={{border:'1px solid #e0e0eb', padding:'3%', marginRight:'30px',marginLeft:'20px'}}>
                    <h6 style={{textAlign:'center'}}>DANH SÁCH CẢNH BÁO</h6>
                    <div
                      className="page-content page-container"
                      id="page-content"
                    >
                      <div className="padding">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="list list-row block">
                              {state.data
                                ? state.data.map((item) => {
                                    return (
                                      <CanhBaoItem item={item} key={item.id} />
                                    );
                                  })
                                : ""}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-5" style={{border:'1px solid #e0e0eb', padding:'3%'}}>
                    <h6 style={{textAlign:'center'}}>TẠO CẢNH BÁO</h6>
                    <form className="form-card" onSubmit={postCanhBao}>
                      <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-12 flex-column d-flex">
                          <label className="form-control-label px-3">
                            Tiêu đề<span className="text-danger"> *</span>
                          </label>
                          <textarea
                            type="text"
                            id="fname"
                            name="tieuDe"
                            placeholder="Nhập tiêu đề"
                            rows={3}
                            onChange={onChangeCanhBao}
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group col-sm-12 flex-column d-flex">
                          <label className="form-control-label px-3">
                            Nội dung<span className="text-danger"> *</span>
                          </label>
                          <textarea
                            type="text"
                            id="fname"
                            name="noiDung"
                            onChange={onChangeCanhBao}
                            placeholder="Nhập nội dung"
                            rows={5}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                          <button
                            style={{ marginTop: "1.8%", marginLeft: "30%", width:'200px' }}
                            type="submit"
                            className="btn-block btn-primary"
                          >
                            Gửi cảnh báo
                          </button>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
