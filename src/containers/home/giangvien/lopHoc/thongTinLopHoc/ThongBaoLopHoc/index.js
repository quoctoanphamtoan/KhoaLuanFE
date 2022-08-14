import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import ChinhSuaThongBao from "./chinhSuaThongBao";
import DanhSachThongBao from "./danhSachThongBao";

export default function ThongBaoLopHoc(props) {
  const { data } = useSelector((state) => state.thongBaoSinhVienLopHocReducer,shallowEqual);
  const [itemEdit, setItemEdit] = useState(null);
  const handleChinhSuaItem = (data)=>{ 
    setItemEdit(data) 
  }

  return (
    <div
      className="tab-pane fade show"
      id="thongbao"
      role="tabpanel"
      aria-labelledby="thongbao-tab"
    >
      <div className="container-fluid">
        <div className="row" style={{marginLeft:'10px'}}>
          <div className="col-md-6" style={{border:'1px solid #e0e0eb', padding:'5%', paddingRight:'10px',marginRight:'50px'}}>
            <DanhSachThongBao data={data} handleChinhSuaItem={handleChinhSuaItem} id={props.id}/>
          </div>
          <div className="col-md-5" style={{border:'1px solid #e0e0eb', padding:'5%', paddingLeft:'10%'}}>
            <ChinhSuaThongBao id={props.id} itemEdit= {itemEdit}/>
          </div>
        </div>
      </div>
    </div>
  );
}
