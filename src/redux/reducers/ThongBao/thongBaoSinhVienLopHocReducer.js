import {
  GETTHONGBAOSINHVIENS_LOPHOC_FAILED,
  GETTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
  SELECT_0,
  SELECT_1,
  SELECT_2,
  SELECT_3
} from "../../constants/GiangVienConstants";

const initialState = {
  data: null,
  err: null,
};

const thongBaoSinhVienLopHocReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GETTHONGBAOSINHVIENS_LOPHOC_SUCCESS:
      state.data = payload;
      return { ...state };

    case GETTHONGBAOSINHVIENS_LOPHOC_FAILED:
      state.err = payload;
      return { ...state };

    case SELECT_0: { 
      return { ...state };
    }
    case SELECT_1:{
      let list = [];
      state.data.thongBaoLopOfGiangViens.forEach(element => {
        if(!element.hienThi){
          list.push(element);
        }
      }) 
      state.data.thongBaoLopOfGiangViens = list; 

      return { ...state};
    }
     
    case SELECT_2:{
      let list = [];
      state.data.thongBaoLopOfGiangViens.forEach(element => {
        if(element.hienThi){
          list.push(element);
        }
      }) 
      state.data.thongBaoLopOfGiangViens = list; 
      return { ...state};
    }
    
    case SELECT_3:{
      let list = [];
      state.data.thongBaoLopOfGiangViens.forEach(element => {
        if(!element.trangThai){
          list.push(element);
        }
      }) 
      state.data.thongBaoLopOfGiangViens = list; 
      return { ...state};
    }

    default:
      return { ...state };
  }
};

export default thongBaoSinhVienLopHocReducer;
