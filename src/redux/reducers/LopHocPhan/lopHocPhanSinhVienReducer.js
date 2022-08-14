import { GETDANHSACH_LOPHOCPHAN_FAILED, GETDANHSACH_LOPHOCPHAN_SUCCESS } from "../../constants/GiangVienConstants";
import { GETLOPHOCPHANSINHVIEN_FAILED, GETLOPHOCPHANSINHVIEN_SUCCESS } from "../../constants/SinhVienConstants";

const initialState = {
  data: null,
  err: null,
};


 
const lopHocPhanSinhVienReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GETLOPHOCPHANSINHVIEN_SUCCESS:
      state.data = payload;
      return { ...state };

    case GETLOPHOCPHANSINHVIEN_FAILED:
      state.err = payload;
      return { ...state };

    default:
      return {...state};
  }
};

export default lopHocPhanSinhVienReducer;