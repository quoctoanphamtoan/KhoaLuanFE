import { GETSINHVIENS_LOPHOC_FAILED, GETSINHVIENS_LOPHOC_SUCCESS } from "../../constants/GiangVienConstants";

const initialState = {
  data: null,
  err: null,
};


 
const sinhViensLopHocReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GETSINHVIENS_LOPHOC_SUCCESS:
      state.data = payload;
      return { ...state };

    case GETSINHVIENS_LOPHOC_FAILED:
      state.err = payload;
      return { ...state };

     

    default:
      return {...state};
  }
};

export default sinhViensLopHocReducer;