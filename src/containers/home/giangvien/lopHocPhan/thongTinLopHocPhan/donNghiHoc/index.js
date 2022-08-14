import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../../../common/Pagination";
import DonXinNghiHocItem from "../../../../../../component/giangVien/donXinNghiHocItem";
import { atcGetDonXinNghiHoc } from "../../../../../../redux/actions/GiangVien";
import { formatDateTime } from "../../../../../../utils/format/formatValues";
import "./style.css";
export default function DonNghiHoc(props) {
  const dispatch = useDispatch();
  const [items, setItems] = useState();
  const [totalPage, setTotalPage] = useState(10);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const { data } = useSelector(
    (state) => state.donXinNghiHocReducer,
    shallowEqual
  );
  const handelPageClick = (page) => {
    dispatch(
      atcGetDonXinNghiHoc(localStorage.getItem("id"), props.id, page.selected)
    );
    setindex(data.paginationMeta.pageNumber);
  };
  useEffect(() => {
    if (data) {
      setTotalPage(data.paginationMeta.totalPage);
    }
  }, [data]);

  return (
    <div
      className="tab-pane fade show"
      id="donnghihoc"
      role="tabpanel"
      aria-labelledby="donnghihoc-tab"
    >
      <div
        className="danh-sach-don-nghi-hoc"
        style={{ border: "1px solid #e0e0eb", paddingTop: "40px" }}
      >
        <h4 style={{ textAlign: "center" }}>DANH SÁCH ĐƠN NGHỈ HỌC</h4>
        
        <div
          className="table-wrapper-scroll-y my-custom-scrollbar"
          style={{ height: "300px" }}
        >
          <table className="table table table-bordered table-striped mb-0">
            <thead style={{ backgroundColor: "skyblue" }}>
              <tr>
                <th>STT</th>
                <th>Mã sinh viên</th>
                <th>Học và tên</th>
                <th>Ngày nghỉ</th>
                <th>Lý do</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {data
                ? data.listDonXinNghiHoc.map((item,index) => {
                    return (
                      <DonXinNghiHocItem
                        key={item.idDonXinNghiHoc}
                        item={item}
                        stt={index+1}
                        id={props.id}
                      />
                    );
                  })
                : <tr></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
