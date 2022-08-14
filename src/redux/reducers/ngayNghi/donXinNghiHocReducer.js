import { GETDONXINNGHIHOC_FAILED, GETDONXINNGHIHOC_SUCCESS, GETNGAYNGHI_SINHVIEN_FAILED, GETNGAYNGHI_SINHVIEN_SUCCESS } from "../../constants/GiangVienConstants";

const initialState = {
  data: null,
  err: null,
};


 
const donXinNghiHocReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GETDONXINNGHIHOC_SUCCESS:
      state.data = payload;
      return { ...state };

    case GETDONXINNGHIHOC_FAILED:
      state.err = payload;
      return { ...state };

     

    default:
      return {...state};
  }
};

export default donXinNghiHocReducer;