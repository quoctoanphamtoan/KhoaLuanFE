import React from "react";
import './style.css'
export default function Footer() {
  return (
    <footer>
      <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
        <div className="col-12">
          <div className="row row-2">
            <div className="col-sm-3 text-md-center">
              <h5>
                <span> 
                  <i className="fa fa-firefox text-light" aria-hidden="true" />
                </span>
                <b>Sổ liên lạc điện tử</b>
              </h5>
            </div>
             
            <div className="col-sm-3 my-sm-0 mt-5">
              <ul className="list-unstyled">
                <li className="mt-0">Sinh viên</li>
                <li>Xem thông tin</li>
                <li>Xem thông báo</li>
                <li>Gửi đơn xin phép nghỉ học</li>
              </ul>
            </div>
            <div className="col-sm-3 my-sm-0 mt-5">
              <ul className="list-unstyled">
                <li className="mt-0">Giảng viên</li>
                <li>Điểm danh</li>
                <li>Xem danh sách lớp và lớp học phần</li>
                <li>Tạo thông báo</li>
                <li>Tạo cảnh báo và gởi sms phụ huynh</li>
                
              </ul>
            </div>
            <div className="col-sm-3 my-sm-0 mt-5">
              <ul className="list-unstyled">
                <li className="mt-0">Phụ huynh</li>
                <li>Xem thông tin sinh viên</li>
                <li>Xem điểm sinh viên</li>
                <li>Xem thông báo sinh viên</li> 
                 
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-0 pt-0 row-1 mb-0 px-sm-3 px-2">
        <div className="col-12">
          <div className="row my-4 row-1 no-gutters">
            <div className="col-sm-3 col-auto text-center">
              <small>ⒸSổ liên lạc</small>
            </div>
            <div className="col-md-3 col-auto " />
            <div className="col-md-3 col-auto" />
            <div className="col my-auto text-md-left text-right ">
              {" "}
              <small>
             
                <span>
                  <img
                    src="https://i.imgur.com/TtB6MDc.png"
                    className="img-fluid "
                    width={25}
                  />
                </span>{" "}
                <span>
                  <img
                    src="https://i.imgur.com/N90KDYM.png"
                    className="img-fluid "
                    width={25}
                  />
                </span>
              </small>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
