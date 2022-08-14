import { GETTHONGBAOSINHVIEN_FAILED, GETTHONGBAOSINHVIEN_SUCCESS } from "../../constants/SinhVienConstants";

const initialState = {
    data: null,
    err: null,
  };
  
  const thongBaoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
  
      case GETTHONGBAOSINHVIEN_SUCCESS:
        state.data = payload;
        return { ...state };
  
      case GETTHONGBAOSINHVIEN_FAILED:
        state.err = payload;
        return { ...state };
  
     
  
      default:
        return {...state};
    }
  };
  
  export default thongBaoReducer;