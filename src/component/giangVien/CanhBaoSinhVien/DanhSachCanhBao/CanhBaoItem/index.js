import React from "react";
import { formatDateTime } from "../../../../../utils/format/formatValues";

export default function CanhBaoItem(props) {
    const {item} = props;
    return (
      <div className="list-item" data-id={7}>
        <div>
          <a href="#" data-abc="true">
            <span className="w-48 avatar gd-primary">
              <img
                src="https://media.istockphoto.com/vectors/red-alert-icon-vector-id1152189152?k=20&m=1152189152&s=612x612&w=0&h=g3vYzA2InBjEtzXgmy_WGQK6aMeuAQu3hK56nrVePzg="
                alt="."
              />
            </span>
          </a>
        </div>
        <div className="flex">
          {" "}
          <a
            href="#"
            className="item-author text-color"
            data-abc="true"
          >
           {item.tieuDe}
          </a>
          <div className="item-except text-muted text-sm h-1x">
          {item.noiDung}
          </div>
        </div>
        <div className="no-wrap">
          <div className="item-date text-muted text-sm d-none d-md-block">
            {formatDateTime(item.ngayTao)}
          </div>
        </div>
      </div>
    ); 
}
