import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import AddRoom from "./Components/AddRoom";
import Rooms from "./Components/Rooms";
import Room from "./Components/Room";
import HomePage from "./Components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import plus from "./images/plus.png";

export default function App() {
  const [numOfRooms, setnumOfRooms] = useState(0);
  const [myRooms, setMyrooms] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [roomChosen, setroomChosen] = useState([]);

  const onClick = () => setIsActive(!isActive);

  function roomDetails(roomType, name, backGroundColor) {
    if (roomType === "") {
      alert("Error: Choose type of room");
    } else if (name.length < 1) {
      alert("Error: Room name must be more than 1 character");
    } else if (backGroundColor === "") {
      alert("Error: Choose room color");
    } else {
      setnumOfRooms(numOfRooms + 1);
      if (roomType.value === "Bedroom") {
        setMyrooms([
          ...myRooms,
          {
            roomType: roomType,
            name: name,
            backGroundColor: backGroundColor,
            index: numOfRooms,
            products: [{product:"",
            onORoff: false}]
          },
        ]);
      } else if (roomType.value === "Bathroom") {
        setMyrooms([
          ...myRooms,
          {
            roomType: roomType,
            name: name,
            backGroundColor: backGroundColor,
            index: numOfRooms,
            products: [{product:"",
            onORoff: false}]
          },
        ]);
      } else {
        setMyrooms([
          ...myRooms,
          {
            roomType: roomType,
            name: name,
            backGroundColor: backGroundColor,
            index: numOfRooms,
            products: [{product:"",
            onORoff: false}]
          },
        ]);
      }
    }
    onClick();
  }

  function roomProducts(product) {
    let newArr = [];
    if (product.product === "Air_Conditioner") {
      newArr = [
        {
          roomName: roomChosen.roomName,
          index: roomChosen.index,
          product: product.product
        },
      ];
      roomAll(newArr);
    } else if (product.product === "Heater") {
      debugger;
      if(roomChosen.roomType.roomType!=='Bathroom'){
        alert('Error: Can not add heater to this room!')
      }
      else{
        newArr = [
          {
            roomName: roomChosen.roomName,
            index: roomChosen.index,
            product: product.product
          },
        ];
        roomAll(newArr);
      }
    } else if (product.product === "Stereo") {
      newArr = [
        {
          roomName: roomChosen.roomName,
          index: roomChosen.index,
          product: product.product
        },
      ];
      roomAll(newArr);
    } else if (product.product === "Lamp") {
      newArr = [
        {
          roomName: roomChosen.roomName,
          index: roomChosen.index,
          product: product.product
        },
      ];
      roomAll(newArr);
    } else {
      alert("Error: You have to select a product!");
    }
   
  }
  function roomAll(newArr) {
    let newRooms = [...myRooms];
    for (let i = 0; i < numOfRooms; i++) {
      if (newRooms[i].index === roomChosen.index) {
        let pLen = newRooms[i].products.length;
        let p = newRooms[i].products;
        if (p[0].product===""&& pLen===1) {
          p[0].product = newArr[0].product;
        } 
        else if(p[0].product&& pLen===1){
          p.push({product: newArr[0].product, onORoff: false })
        }
        else if (pLen===2) {
          p.push({product: newArr[0].product, onORoff: false })
        } else if (pLen === 3) {
          p.push({product: newArr[0].product, onORoff: false })
        } else{
          alert("Limit reached!");
        }
        newRooms[i] = {
          roomType: newRooms[i].roomType,
          name: newRooms[i].name,
          backGroundColor: newRooms[i].backGroundColor,
          index: newRooms[i].index,
          products: p
        };
      } else {
        newRooms[i] = {
          roomType: newRooms[i].roomType,
          name: newRooms[i].name,
          backGroundColor: newRooms[i].backGroundColor,
          index: newRooms[i].index,
          products: newRooms[i].products
        };
      }
    }
    setMyrooms(newRooms);
  }

  function chosenRoom(roomType,name, index) {
    debugger;
    setroomChosen({roomType: roomType, roomName: name, index: index });
  }

  function deleteProduct(productName, index) {
    let newMyroom = myRooms;
   let pLen = newMyroom[roomChosen.index].products.length;
   if(pLen===1){
    newMyroom[roomChosen.index].products[0].product = "";
   }
   else if(pLen===2){
     if(index===0){
      newMyroom[roomChosen.index].products.splice(index, 1);
     }
     else{
      newMyroom[roomChosen.index].products.splice(index, 1);
     }
   }
   else if(pLen===3){
    if(index===0){
      newMyroom[roomChosen.index].products.splice(index, 1);
     }
     else if(index===1){
      newMyroom[roomChosen.index].products.splice(index, 1);
     }
     else{
      newMyroom[roomChosen.index].products.splice(index, 1);
     }
   }
   else if(pLen===4){
    if(index===0){
      newMyroom[roomChosen.index].products.splice(index, 1);
     }
     else if(index===1){
      newMyroom[roomChosen.index].products.splice(index, 1);
     }
     else if(index===2){
      newMyroom[roomChosen.index].products.splice(index, 1);
     }
     else{
      newMyroom[roomChosen.index].products.splice(index, 1);
     }
   }
    setMyrooms(newMyroom);
  }


  function saveProductOn(index){
    let newMyroom = myRooms;
    if(newMyroom[roomChosen.index].products[index].onORoff === false)
    newMyroom[roomChosen.index].products[index].onORoff = true;
    else
    newMyroom[roomChosen.index].products[index].onORoff = false;

    setMyrooms(newMyroom);
  }

  return (
    <div className="App">
      <div className="home">
        <Router>
          <Link  to="/" title="Go Home" style={{ textDecoration: "none" }}  onClick={() => setIsActive(false)}>
            <h1>Smart House</h1>
          </Link>
          <Switch>
            <Route
              exact
              path="/Room"
              component={() => {
                return (
                  <div>
                    <Room
                      roomProducts={roomProducts}
                      deleteProduct={deleteProduct}
                      numOfRooms={numOfRooms}
                      myRooms={myRooms}
                      roomChosen={roomChosen}
                      saveProductOn={saveProductOn}
                    />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/"
              component={() => {
                return (
                  <div className="container row">
                    {myRooms.map((e, i) => {
                      return (
                        <div className="col-4">
                          <Rooms
                            roomType={e.roomType}
                            name={e.name}
                            backGroundColor={e.backGroundColor}
                            index={i}
                            chosenRoom={chosenRoom}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            />
          </Switch>
          <Link id="btn" to="/AddRoom">
            {isActive ? null : (
              <img
                src={plus}
                alt="Add Room"
                className="NewRoom"
                onClick={() => setIsActive(!isActive)}
              />
            )}
          </Link>

          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return <HomePage />;
              }}
            />
            <Route
              exact
              path="/AddRoom"
              component={() => {
                return <AddRoom addRoom={roomDetails} />;
              }}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
