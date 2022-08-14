import { DANGNHAP_FAILED, DANGNHAP_SUCCSESS } from "../../constants/taiKhoanConstants";

 
const initialState = {
    data: null,
    err: null,
};

const taiKhoanReducer =(state = initialState, { type, payload }) => {
  switch (type) {
    
    case DANGNHAP_SUCCSESS:
        state.data = payload;
      return { ...state  };

    case DANGNHAP_FAILED:
        state.err = payload;
      return { ...state  };

    default:
      return {...state};
  }
};

export default taiKhoanReducer;