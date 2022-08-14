import { GETDANHSACH_LOPHOC_FAILED, GETDANHSACH_LOPHOC_SUCCESS } from "../../constants/GiangVienConstants";

const initialState = {
  data: null,
  err: null,
};


 
const lopHocReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GETDANHSACH_LOPHOC_SUCCESS:
      state.data = payload;
      return { ...state };

    case GETDANHSACH_LOPHOC_FAILED:
      state.err = payload;
      return { ...state };

    default:
      return {...state};
  }
};

export default lopHocReducer;