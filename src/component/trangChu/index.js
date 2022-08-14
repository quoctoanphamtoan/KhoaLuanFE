import React from "react";
import student from "./../../assets/img/student.png";
import teacher from "./../../assets/img/teacher.png";
import woman from "./../../assets/img/woman.png";
import "./style.css";
export default function TrangChu(props) {
  document.title = "Trang chủ";
  return (
    <div className="banner" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: "400px" }}
              src="http://ptchc.iuh.edu.vn/wp-content/uploads/2016/12/WEB.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "400px" }}
              src="http://ptchc.iuh.edu.vn/wp-content/uploads/2016/12/QSIUH-1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "400px" }}
              src="http://ptchc.iuh.edu.vn/wp-content/uploads/2016/12/BANNER-2-2-ASU-02-Web.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="gioi-thieu" style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className="col-md-12">
            <marquee
              style={{
                fontSize: "50px",
                color: "#809fff",
                fontWeight: "1000",
                margin: "20px",
              }}
            >
              {" "}
              HỆ THỐNG SỔ LIÊN LẠC ĐIỆN TỬ
            </marquee>
          </div>
        </div>
        <div className="row" style={{ padding: "5%", paddingTop: "0%" }}>
          <div className="col-md-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
                style={{ padding: "5%" }}
              >
                <img
                  src={student}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "70%",
                    display: "block",
                  }}
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  Sinh viên
                </h5>
                <p className="card-text">
                  Có thể theo dõi tình hình học tập và xin phép nghỉ học...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
                style={{ padding: "5%" }}
              >
                <img
                  src={teacher}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "70%",
                    display: "block",
                  }}
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  Giảng Viên
                </h5>
                <p className="card-text">
                  Điểm danh và theo dõi tình hình học tập và thông báo cho lớp
                  học hoặc lớp học phần của mình, cảnh báo các sinh viên ....
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
                style={{ padding: "5%" }}
              >
                <img
                  src={woman}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "70%",
                    display: "block",
                  }}
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  Phụ Huynh
                </h5>
                <p className="card-text">
                  Có thể theo dõi được tình học tập của con cái
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
