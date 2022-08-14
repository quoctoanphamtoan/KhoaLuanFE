import {React} from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useDispatch, useSelector } from "react-redux";
import { atcEditDisplayThongBaoSinhViensLopHoc, atcEditDisplayThongBaoSinhViensLopHocPhan } from "../../../redux/actions/GiangVien";
import { formatDateTime } from "../../../utils/format/formatValues";
 // Import css

export default function ThongBaoSinhVienLopHocPhanItem(props) { 
  const xemChiTiet = () => { 
  };
  const dispatch = useDispatch();
  const chinhSua = () => {
    props.handleChinhSuaItem(props.item);
  };
  const xoa = () => { 
  };
 
  const { item } = props;
  const displayThongBao = ()=>{
    confirmAlert({
      title: "Lưu ý",
      message:
        `Bạn có muốn ${item.hienThi?'ẩn':'hiện'} thông báo này! `,
      buttons: [
        {
          label: "Có",
          onClick: () => { 
            dispatch(atcEditDisplayThongBaoSinhViensLopHocPhan(item.id,props.id))
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
    <div
      className="list-item"
      data-id={13}
      data-item-sortable-id={0}
      draggable="true"
      role="option"
      aria-grabbed="false"
      style={{backgroundColor:`${item.hienThi?'':'#e3f2fd'}`}}
    >
      <div className="flex">
        <a  className="item-author text-color" data-abc="true">
          {item.tieuDe.slice(0, 30)}...
        </a>
        <div className="item-except text-muted text-sm h-1x">
          {item.noiDung}
        </div>
      </div>
      <div className="no-wrap">
        <div className="item-date text-muted text-sm d-none d-md-block">
          {formatDateTime(item.ngayTao)}
        </div>
      </div>
      <div>
        <div className="item-action dropdown">
          <a
            data-toggle="dropdown"
            className="text-muted"
            data-abc="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-more-vertical"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right bg-black"
            role="menu"
          >
             
            <a
              className="dropdown-item edit"
              data-abc="true"
              onClick={chinhSua}
            >
              Chỉnh sửa
            </a>

          
            {item.hienThi ? (
              <a className="dropdown-item trash" data-abc="true" onClick={displayThongBao}>
                Ẩn thông báo
              </a>
            ) : (
              <a className="dropdown-item trash" data-abc="true" onClick={displayThongBao}>
                Hiện thông báo
              </a>
             )} 
          </div>
        </div>
      </div>
    </div>
  );
}
