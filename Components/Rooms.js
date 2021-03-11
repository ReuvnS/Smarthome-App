import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Rooms(props) {
  return (
    <div
      className="rooms"
      style={{ backgroundColor: props.backGroundColor.backGroundColor }}
    >
      <Link
        to="Room" style={{ textDecoration: 'none' }}
        onClick={() => {
          props.chosenRoom(props.roomType,props.name.name, props.index);
        }}
      >
        <h3 className='room'>{props.name.name}</h3>
      </Link>
    </div>
  );
}
