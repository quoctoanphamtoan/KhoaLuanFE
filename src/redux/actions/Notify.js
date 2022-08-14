import * as actionTypes from "../constants/LoadingConstants";

export const displayNotify = (data) => {
  return (dispatch) => {
    dispatch({
      payload:data,
      type: actionTypes.DISPLAY_NOF,
    });
  };
};
