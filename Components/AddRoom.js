import React, { useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";

export default function Rooms({ addRoom, props }) {
  const [roomType, setRoomType] = useState("");
  const [name, setName] = useState("");
  const [backGroundColor, setBackGroundColor] = useState("");

  return (
    <div className="AddRoom">
      <br />
      <select
      className="Rselect"
         onChange={(e) => setRoomType({ roomType: e.target.value })}>
        <option value="none">Select room..</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Kitchen">Kitchen</option>
      </select>
      <br />
      <input
      className='roomName'
        type="text"
        placeholder="Room name"
        maxLength="5"
        onChange={(e) => setName({ name: e.target.value })}
      />
      <br />
      <select
      className="Rselect"
      onChange={(e) =>
          setBackGroundColor({ backGroundColor: e.target.value })
        }
      >
        <option value="none">Select color..</option>
        <option value="lightblue">Blue</option>
        <option value="Pink">Pink</option>
        <option value="lightgreen">Green</option>
        <option value="White">White</option>
        <option value="#ffff33">Yellow</option>
        <option value="#ff1a1a">Red</option>
      </select>
      <br />
      <Link
        to="/" style={{ textDecoration: 'none' }}
        onClick={() => {
          addRoom(roomType, name, backGroundColor);
        }}
      >
        <p className="btnP" >Add room</p>
      </Link>
    </div>
  );
}
