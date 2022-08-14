import { GETDONXINNGHIHOC_FAILED, GETDONXINNGHIHOC_SUCCESS, GETNGAYNGHI_SINHVIEN_FAILED, GETNGAYNGHI_SINHVIEN_SUCCESS } from "../../constants/GiangVienConstants";
import { GETDONXINNGHIHOC_OFSINHVIEN_FAILED, GETDONXINNGHIHOC_OFSINHVIEN_SUCCESS } from "../../constants/SinhVienConstants";

const initialState = {
  data: null,
  err: null,
};


 
const donXinNghiHocOfSinhVienReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GETDONXINNGHIHOC_OFSINHVIEN_SUCCESS:
      state.data = payload;
      return { ...state };

    case GETDONXINNGHIHOC_OFSINHVIEN_FAILED:
      state.err = payload;
      return { ...state };

     

    default:
      return {...state};
  }
};

export default donXinNghiHocOfSinhVienReducer;