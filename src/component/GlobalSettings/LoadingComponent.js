import React from "react";
import { useSelector } from "react-redux";
import loading from "./../../assets/img/loading.gif";
import style from "./LoadingComponent.module.css";
export default function LoadingComponent(props) {
  const { isLoading } = useSelector((state) => state.loadingReducer); 
  return (
    <div
      className={style.bgLoading}
      style={{ display: isLoading ? "flex" : "none" }}
    >
      <img src={loading} />
    </div>
  );
}
