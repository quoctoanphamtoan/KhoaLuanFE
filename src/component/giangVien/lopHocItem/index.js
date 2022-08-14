import React from "react";
import { NavLink } from "react-router-dom";

export default function LopHocItem(props) { 
  const { stt, item } = props;
  return (
    <tr>
      <td>{stt + 1}</td>
      <td>
        <NavLink className="nav-link" to={`/giangvien/lophoc/${item.id}` }>{item.id}</NavLink>
      </td>
      <td>{item.tenLop}</td>
      <td>{item.siSo}</td>
    </tr>
  );
}
