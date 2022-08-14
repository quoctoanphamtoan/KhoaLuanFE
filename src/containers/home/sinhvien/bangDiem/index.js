import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import "./style.css";

export default function BangDiem() {
  document.title = "Kết quả học tập"
  const trangThai = (diemck,diemgiuaki,diemtbc)=>{
    if(diemgiuaki<0){
      return '';
    }
    if(diemck<0){
      return '';
    }
    if(diemgiuaki==0){
      return 'Học lại';
    }
    if(diemck==0){
      return 'Học lại';
    }
    if(diemtbc<3){
      return 'Học lại';
    }
    
  }
  const formatDiem =(diem)=>{
    return diem>-1?diem:'-';
  }
  const { data } = useSelector((state) => state.diemReducer, shallowEqual);
  return (
    <div className="bangdiem">
      <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>KẾT QUẢ HỌC TẬP</h4>
      <table className="table table-bordered" >
        <thead style={{ backgroundColor: 'skyblue' }}>
          <tr style={{ backgroundColor: 1, textAlign: "center" }}>
            <th scope="col">STT</th>
            <th scope="col">Tên môn học</th>
            <th scope="col" colSpan="3">
              Điểm thường kỳ
            </th>
            <th scope="col">Điểm giữa kỳ</th>
            <th scope="col">Điểm cuối kỳ</th>
            <th scope="col">Điểm tổng kết</th>
            <th scope="col">Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.diemSinhVienDtos.map((item, index) => { 
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.tenMonHoc}</td>
                  <td>{item.tk1}</td>
                  <td>{item.tk2}</td>
                  <td>{item.tk3}</td>
                  <td>{item.gk}</td>
                  <td>{item.ck>0?item.ck:'-'}</td>
                  <td>{!item.trangThai ? 0 : formatDiem(item.tbc)}</td>
                  <td>{trangThai(item.ck,item.gk,item.tbc)}</td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}

          <tr>
            <th scope="row">Điểm trung bình: </th>
            <td colSpan="8">{data ? Math.round(data.diemTongKet * 100) / 100 : ''}</td>
          </tr> 
        </tbody>
      </table>
    </div>
  );
}
