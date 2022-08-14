import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import CanhBaoItem from './CanhBaoItem'

export default function DanhSachCanhBao(props) { 
    const data = useSelector((state) => state.canhBaoSinhVienOfGiangVienReducer,shallowEqual);  
    return (
        <></>
    )
}
