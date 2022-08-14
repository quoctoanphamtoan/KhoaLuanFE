import { CHINHSUATHONGTINSINHVIEN_FAILED, CHINHSUATHONGTINSINHVIEN_SUCCESS, XEMTHONGTINSINHVIEN_FAILED, XEMTHONGTINSINHVIEN_SUCCESS } from "../../constants/SinhVienConstants";

const initialState = {
  data: null,
  err: null,
};


 
const sinhVienReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case XEMTHONGTINSINHVIEN_SUCCESS:
      state.data = payload;
      return { ...state };

    case XEMTHONGTINSINHVIEN_FAILED:
      state.err = payload;
      return { ...state };

    case CHINHSUATHONGTINSINHVIEN_SUCCESS:
      state.data = { ...state.data, diaChi: payload.diaChi, soDT: payload.soDT, email: payload.email };


 
      return { ...state };

    case CHINHSUATHONGTINSINHVIEN_FAILED:
      state.err = payload;
      return { ...state };

    default:
      return {...state};
  }
};

export default sinhVienReducer;