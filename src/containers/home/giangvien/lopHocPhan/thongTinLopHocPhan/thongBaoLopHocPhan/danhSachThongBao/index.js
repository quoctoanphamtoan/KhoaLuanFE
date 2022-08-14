import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ThongBaoSinhVienLopHocPhanItem from "../../../../../../../component/giangVien/thongBaoSinhVienLopHocPhanItem";
import { atcGetThongBaoSinhViensLopHocPhan } from "../../../../../../../redux/actions/GiangVien";
import "./style.css";
export default function DanhSachThongBaoLopHocPhan(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(2);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const [select, setSelect] = useState(0);

  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    const { value, name } = e.target;
    setSearch(value);
  };

  const onChangeSelect = (e) => {
    const { value, name } = e.target;
    setSelect(value);
  };
  const handleSearch = (data) => {
    if (select == 3) {
      data = data.filter((item) => {
        return !item.trangThai;
      });
    }
    if (select == 1) {
      data = data.filter((item) => {
        return !item.hienThi;
      });
    }
    if (select == 2) {
      data = data.filter((item) => {
        return item.hienThi;
      });
    }

    return data.filter((item) => {
      return item.tieuDe && item.noiDung
        ? item.tieuDe.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            item.noiDung.toLowerCase().indexOf(search.toLowerCase()) !== -1
        : "";
    });
  };

  const handleClickThongBao = (data) => {
    setDataItem(data);
  };

  const handelPageClick = (page) => {
    dispatch(atcGetThongBaoSinhViensLopHocPhan(props.id, page.selected));
    setindex(data.paginationMeta.pageNumber);
  };

  useEffect(() => {
    if (data) { 
      setTotalPage(data.paginationMeta.totalPage);
    }
  }, [data]);

  return (
    <div className="danh-sach-thong-bao">
      <div className="search">
        <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div className="input-group">
            <input
              type="search"
              name="search"
              onChange={onSearch}
              placeholder="Nhập từ khóa cần tìm"
              aria-describedby="button-addon1"
              className="form-control border-0 bg-light"
            />
            <div className="input-group-append">
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="selected"> */}
        {/* <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          defaultValue={0}
          onChange={onChangeSelect}
        >
          <option value={0}>Tất cả thông báo</option>
          <option value={1}>Thông báo bị ẩn</option>
          <option value={2}>Thông báo hiển thị</option>
          <option value={3}>Thông báo bị xóa</option>
        </select> */}
      {/* </div> */}
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row">
            {/* <div className="col-md-8"> */}
            <div className="d-flex justify-content-center">
              <div
                className="list list-row card"
                id="sortable"
                data-sortable-id={0}
                aria-dropeffect="move"
              >
                {data
                  ? handleSearch(data.thongBaoLopOfGiangViens).map((item) => {
                      return (
                        <ThongBaoSinhVienLopHocPhanItem
                          id={props.id}
                          item={item}
                          key={item.id}
                          handleChinhSuaItem={props.handleChinhSuaItem}
                        />
                      );
                    })
                  : ""}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="pagination"></div>
    </div>
  );
}
