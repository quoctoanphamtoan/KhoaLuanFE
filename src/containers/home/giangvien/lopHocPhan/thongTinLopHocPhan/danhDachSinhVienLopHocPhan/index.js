import React, { useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../../../common/Pagination";
import SinhVienLopHocPhanItem from "../../../../../../component/giangVien/sinhVienLopHocPhanItem";
import { atcGetSinhViensLopHocPhan } from "../../../../../../redux/actions/GiangVien";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import DiemDanh from "./diemDanh";
import NhapDiem from "./nhapDiem";
import "./style.css";
import CanhBaoSinhVien from "../../../../../../component/giangVien/CanhBaoSinhVien";
export default function DanhSachSinhVienLopHocPhan(props) {
  const [items, setItems] = useState();
  const [totalPage, setTotalPage] = useState(10);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const [idLhp, setIdLhp] = useState();

  const { data } = useSelector(
    (state) => state.sinhViensLopHocPhanReducer,
    shallowEqual
  );
  const [select, setSelect] = useState(0);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const getItem = (id) => {
    return data.sinhVienLopHocPhanDtos.filter((item) => {
      return item.id == id;
    })[0];
  };
  const onChangeSelect = (e) => {
    const { value, name } = e.target;
    setSelect(value);
  };
  const getIdItem = (id) => {
    setDataItem(getItem(id));
  };

  const getIdSvLhp = (id) => {
    setIdLhp(id);
  };

  const handelPageClick = (page) => {
    dispatch(atcGetSinhViensLopHocPhan(props.id, page.selected));
    setindex(data.paginationMeta.pageNumber);
  };
  useEffect(() => {
    if (data) {
      setTotalPage(data.paginationMeta.totalPage);
    }
  }, [data]);
  const onSearch = (e) => {
    const { value, name } = e.target;
    setSearch(value);
  };
  const handleSearch = (data) => {
    if (select == 1) {
      data = data.filter((item) => {
        return !item.trangThai;
      });
    }
    if (select == 2) {
      data = data.filter((item) => {
        return item.trangThai;
      });
    }
    if (search === "") {
      return data;
    }
    return data.filter((item) => {
      return (
        item.hoTen.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        item.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        item.maSV.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });
  };
  const returnItem = (item11) => {
    return item11;
  };
  return (
    <>
      <div className="danh-sach-sinh-vien">
        <h3 style={{ textAlign: "center", marginTop: "30px", marginBottom:'40px' }}>
          DANH SÁCH SINH VIÊN{" "}
        </h3>
        <div className="container-fluid header-danh-sach-sinh-vien">
          <div className="row" style={{width:'100%'}}>
            <div className="search-danh-sach-sinh-vien col-md-6">
              <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                <div className="input-group">
                  <input
                    onChange={onSearch}
                    type="search"
                    placeholder="Nhập từ khóa cần tìm..."
                    aria-describedby="button-addon1"
                    className="form-control border-0 bg-light"
                  />
                  <div className="input-group-append">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 selected-danh-sach-sinh-vien"
              style={{ width: "40%", marginTop: "15px" , display:'flex', height:'50px'}}
            >
              <select
                style={{ height: "35px", borderRadius: "1.2rem",  marginRight:'20px', marginLeft: "200px"}}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                defaultValue={0}
                onChange={onChangeSelect}
              >
                <option value={0}>Tất cả sinh viên</option>
                <option value={1}>Những sinh viên bị cấm thi</option>
                <option value={2}>Những sinh viên được dự thi</option>
              </select>
              
              <ReactHTMLTableToExcel
                style={{marginTop:'-5px'}}
                id="test-table-xls-button"
                className="btn-outline"
                table="table-to-xls"
                filename={`LopHocPhan${props.id}`}
                sheet={`LopHocPhan${props.id}`}
                buttonText="Tải về"
              
              />
            </div>
          </div>
        </div>

        <table
          id="table-to-xls"
          className="table table-bordered"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#b3e0ff",
                textAlign: "center",
              }}
            >
              <th scope="col">STT</th>
              <th scope="col">Mã sinh viên</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">TK1</th>
              <th scope="col">TK2</th>
              <th scope="col">TK3</th>
              <th scope="col">GK</th>
              <th scope="col">CK</th>
              <th scope="col">TBC</th>
              <th scope="col" style={{ width: "10%" }}>
                Số ngày nghỉ có phép
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Số ngày nghỉ không phép
              </th>
              <th scope="col">Tình trạng</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              handleSearch(data.sinhVienLopHocPhanDtos).map(
                (sinhvien, index) => {
                  return (
                    <SinhVienLopHocPhanItem
                      key={sinhvien.id}
                      item={sinhvien}
                      index={index}
                      getIdItem={getIdItem}
                      getIdSvLhp={getIdSvLhp}
                      returnItem={returnItem}
                    />
                  );
                }
              )
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
        {useMemo(
          () => (
            <CanhBaoSinhVien
              idLopHocPhan={props.id}
              dataItem={dataItem}
              idSvLhp={idLhp}
            />
          ),
          [returnItem]
        )}
        <Pagination
        data={{
          index: index,
          totalPage: totalPage,
          handelPageClick: handelPageClick,
        }}
      />
      </div>
      {/* {useMemo(
        () => (
          <NhapDiem dataItem={dataItem} idLopHocPhan={props.id} />
        ),
        [dataItem]
      )} */}
      {useMemo(
        () => (
          <DiemDanh
            idLopHocPhan={props.id}
            dataItem={dataItem}
            idSvLhp={idLhp}
          />
        ),
        [dataItem]
      )}
    </>
  );
}
