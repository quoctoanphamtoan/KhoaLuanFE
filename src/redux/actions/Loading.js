import * as actionTypes from "../constants/LoadingConstants";

export const hideLoading = ()=>{
    return (dispatch)=>{
       dispatch({
        type: actionTypes.HIDE_LOADING
       })
    }
}

export const displayLoading = ()=>{
    return (dispatch)=>{
        dispatch({
            type: actionTypes.DISPLAY_LOADING
        })
    }
}