import { GET_CANHBAO_SINHVIEN_FAILED, GET_CANHBAO_SINHVIEN_SUCCESS } from "../../constants/GiangVienConstants";

const initialState = {
  data: null,
  err: null,
};


 
const canhBaoSinhVienOfGiangVienReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_CANHBAO_SINHVIEN_SUCCESS:
      state.data = payload;
      return { ...state };

    case GET_CANHBAO_SINHVIEN_FAILED:
      state.err = payload;
      return { ...state };

    default:
      return {...state};
  }
};

export default canhBaoSinhVienOfGiangVienReducer;