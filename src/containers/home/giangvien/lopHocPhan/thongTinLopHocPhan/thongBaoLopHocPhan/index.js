import React, { useState } from 'react'
import { shallowEqual } from 'react-redux';
import { useSelector } from 'react-redux';
import ChinhSuaThongBaoLopHocPhan from './chinhSuaThongBao'
import DanhSachThongBaoLopHocPhan from './danhSachThongBao'

export default function ThongBaoLopHocPhan(props) {
  const { data } = useSelector((state) => state.thongBaoSinhVienLopHocPhanReducer,shallowEqual);
  const [itemEdit, setItemEdit] = useState(null);
  const handleChinhSuaItem = (data2)=>{ 
    setItemEdit(data2) 
  }
    return (
        <div
        className="tab-pane fade show thong-bao-lop-hoc-phan"
        id="thongbao"
        role="tabpanel"
        aria-labelledby="thongbao-tab"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <DanhSachThongBaoLopHocPhan data={data} handleChinhSuaItem={handleChinhSuaItem} id={props.id}/>
            </div>
            <div className="col-md-1 between"></div>
            <div className="col-md-5">
              <ChinhSuaThongBaoLopHocPhan id={props.id} itemEdit= {itemEdit}/>
            </div>
          </div>
        </div>
      </div>
    )
}
