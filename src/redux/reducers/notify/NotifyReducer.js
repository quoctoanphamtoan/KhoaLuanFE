import {
    DISPLAY_NOF
} from "./../../constants/LoadingConstants";

const initialState = {
  message: "",
  type: "",
  open: 0,
};

const NotifyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DISPLAY_NOF:
      const { message, type ,open} = payload;
      state.message = message;
      state.type = type;
      state.open++;

    default:
      return { ...state };
  }
};

export default NotifyReducer;
