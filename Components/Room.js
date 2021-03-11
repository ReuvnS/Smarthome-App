import React, { useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";

export default function Room(props) {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState([""]);
  function pickPic(p1, cond1, p2, cond2, p3, cond3, p4, cond4) {
    if(p1===""){
      return null
    }
    else if (p2 === null) {
      return (
        <div className="pBox">
          <p style={{ display: "inline" }}>
            <b>Products: </b>
          </p>
          {cond1===true? (
             <Link to='/Room'><img
             className="imgClicked"
             onClick={() => props.saveProductOn(0)}
             src={process.env.PUBLIC_URL + `${p1}.png`}
             alt=""
           ></img></Link>
          ) : (
            <div className="pBox">
             <Link to='/Room'><img
              className="img"
              onClick={() => props.saveProductOn(0)}
              src={process.env.PUBLIC_URL + `${p1}.png`}
              alt=""
              ></img></Link>
              <Link
            to="/"
            className="btnX"
            onClick={() => props.deleteProduct(p1, 0)}
          >
            X
          </Link>
          </div>
          )}
        </div>
      );
    } else if (p3 === null) {
      return (
        <div>
          <p style={{ display: "inline" }}>
            <b>Products: </b>
          </p>
          {cond1===true ? (
            <Link to='/Room'><img
            className="imgClicked"
            onClick={() => props.saveProductOn(0)}
            src={process.env.PUBLIC_URL + `${p1}.png`}
            alt=""
          ></img></Link>
          ) : (
            <div className="pBox">
               <Link to='/Room'><img
                 className="img"
                onClick={() => props.saveProductOn(0)}
                src={process.env.PUBLIC_URL + `${p1}.png`}
                alt=""
              ></img></Link>
              <Link
                to="/"
                className="btnX"
                onClick={() => props.deleteProduct(p1, 0)}
              >
                X
              </Link>
            </div>
          )}
          {cond2===true ? (
            <Link to='/Room'><img
            className="imgClicked"
              onClick={() => props.saveProductOn(1)}
              src={process.env.PUBLIC_URL + `${p2}.png`}
              alt=""
              ></img></Link>
              ) : (
            <div className="pBox">
            <Link to='/Room'><img
              className="img"
              onClick={() => props.saveProductOn(1)}
              src={process.env.PUBLIC_URL + `${p2}.png`}
              alt=""
            ></img></Link>
            <Link
            to="/"
            className="btnX"
            onClick={() => props.deleteProduct(p2, 1)}
          >
            X
          </Link>
          </div>
          )}
        </div>
      );
    } else if (p4 === null) {
      return (
        <div>
          <p style={{ display: "inline" }}>
            <b>Products: </b>
          </p>
          {cond1===true ? (
            <Link to='/Room'><img
            className="imgClicked"
              onClick={() => props.saveProductOn(0)}
              src={process.env.PUBLIC_URL + `${p1}.png`}
              alt=""
            ></img></Link>
          ) : (
            <div className="pBox">
            <Link to='/Room'><img
                className="img"
                onClick={() => props.saveProductOn(0)}
                src={process.env.PUBLIC_URL + `${p1}.png`}
                alt=""
              ></img></Link>

              <Link
                to="/"
                className="btnX"
                onClick={() => props.deleteProduct(p1, 0)}
              >
                X
              </Link>
            </div>
          )}

          {cond2===true ? (
            <Link to='/Room'><img
            className="imgClicked"
              onClick={() => props.saveProductOn(1)}
              src={process.env.PUBLIC_URL + `${p2}.png`}
              alt=""
            ></img></Link>
          ) : (
            <div className="pBox">
            <Link to='/Room'><img
                className="img"
                onClick={() => props.saveProductOn(1)}
                src={process.env.PUBLIC_URL + `${p2}.png`}
                alt=""
              ></img></Link>
              <Link
                to="/"
                className="btnX"
                onClick={() => props.deleteProduct(p2, 1)}
              >
                X
              </Link>
            </div>
          )}

          {cond3===true ? (
            <Link to='/Room'><img
            className="imgClicked"
              onClick={() => props.saveProductOn(2)}
              src={process.env.PUBLIC_URL + `${p3}.png`}
              alt=""
            ></img></Link>
          ) : (
            <div className="pBox">
            <Link to='/Room'><img
                className="img"
                onClick={() => props.saveProductOn(2)}
                src={process.env.PUBLIC_URL + `${p3}.png`}
                alt=""
              ></img></Link>

              <Link
                to="/"
                className="btnX"
                onClick={() => props.deleteProduct(p3, 2)}
              >
                X
              </Link>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <p style={{ display: "inline" }}>
            <b>Products: </b>
          </p>
          {cond1===true ? (
            <Link to='/Room'><img
            className="imgClicked"
              onClick={() => props.saveProductOn(0)}
              src={process.env.PUBLIC_URL + `${p1}.png`}
              alt=""
            ></img></Link>
          ) : (
            <div className="pBox">
            <Link to='/Room'><img
                className="img"
                onClick={() => props.saveProductOn(0)}
                src={process.env.PUBLIC_URL + `${p1}.png`}
                alt=""
              ></img></Link>
              <Link
                to="/"
                className="btnX"
                onClick={() => props.deleteProduct(p1, 0)}
              >
                X
              </Link>
            </div>
          )}

          {cond2===true ? (
            <Link to='/Room'><img
            className="imgClicked"
              onClick={() => props.saveProductOn(1)}
              src={process.env.PUBLIC_URL + `${p2}.png`}
              alt=""
            ></img></Link>
          ) : (
            <div className="pBox">
            <Link to='/Room'><img
                className="img"
                onClick={() => props.saveProductOn(1)}
                src={process.env.PUBLIC_URL + `${p2}.png`}
                alt=""
              ></img></Link>
              <Link
                to="/"
                className="btnX"
                onClick={() => props.deleteProduct(p2, 1)}
              >
                X
              </Link>
            </div>
          )}
          {cond3===true ? (
            <Link to='/Room'><img
            className="imgClicked"
              onClick={() => props.saveProductOn(2)}
              src={process.env.PUBLIC_URL + `${p3}.png`}
              alt=""
            ></img></Link>
          ) : (
            <div className="pBox">
            <Link to='/Room'><img
                className="img"
                onClick={() => props.saveProductOn(2)}
                src={process.env.PUBLIC_URL + `${p3}.png`}
                alt=""
              ></img></Link>
              <Link
                to="/"
                className="btnX"
                onClick={() => props.deleteProduct(p3, 2)}
              >
                X
              </Link>
            </div>
          )}
          {cond4===true ? (
            <Link to='/Room'><img
            className="imgClicked"
              onClick={() => props.saveProductOn(3)}
              src={process.env.PUBLIC_URL + `${p4}.png`}
              alt=""
            ></img></Link>
          ) : (
            <div className="pBox">
            <Link to='/Room'><img
                className="img"
                onClick={() => props.saveProductOn(3)}
                src={process.env.PUBLIC_URL + `${p4}.png`}
                alt=""
              ></img></Link>
              <Link
                to="/"
                className="btnX"
                onClick={() => props.deleteProduct(p4, 3)}
              >
                X
              </Link>
            </div>
          )}
        </div>
      );
    }
  }

  return (
    <div className="room">
      {(() => {
        for (let i = 0; i < props.numOfRooms; i++) {
          if (props.myRooms[i].index === props.roomChosen.index) {
            return (
              <div>
                <p>
                  <b>Room Name:</b> {props.myRooms[i].name.name}
                </p>
                <p>
                  <b>Room Type:</b> {props.myRooms[i].roomType.roomType}
                </p>
                {(() => {
                  if (props.myRooms[i].products[0].product!=="") {
                     if (props.myRooms[i].products.length === 1) {
                      let str = pickPic(
                        props.myRooms[i].products[0].product ,props.myRooms[i].products[0].onORoff,
                        null,null,
                        null,null,
                        null,null
                      );
                      return <div>{str}</div>;
                    } else if (props.myRooms[i].products.length === 2) {
                      let str = pickPic(
                        props.myRooms[i].products[0].product, props.myRooms[i].products[0].onORoff,
                        props.myRooms[i].products[1].product, props.myRooms[i].products[1].onORoff,
                        null,null,
                        null,null
                      );
                      return <div>{str}</div>;
                    } else if (props.myRooms[i].products.length === 3) {
                      let str = pickPic(
                        props.myRooms[i].products[0].product, props.myRooms[i].products[0].onORoff,
                        props.myRooms[i].products[1].product, props.myRooms[i].products[1].onORoff,
                        props.myRooms[i].products[2].product, props.myRooms[i].products[2].onORoff,
                        null, null
                      );
                      return <div>{str}</div>;
                    } else if (props.myRooms[i].products.length === 4) {
                      let str = pickPic(
                        props.myRooms[i].products[0].product, props.myRooms[i].products[0].onORoff,
                        props.myRooms[i].products[1].product, props.myRooms[i].products[1].onORoff,
                        props.myRooms[i].products[2].product, props.myRooms[i].products[2].onORoff,
                        props.myRooms[i].products[3].product, props.myRooms[i].products[3].onORoff
                      );
                      return <div>{str}</div>;
                    } else {
                      let str = pickPic(
                        props.myRooms[i].products[0].product, props.myRooms[i].products[0].onORoff,
                        props.myRooms[i].products[1].product, props.myRooms[i].products[1].onORoff,
                        props.myRooms[i].products[2].product, props.myRooms[i].products[2].onORoff,
                        props.myRooms[i].products[3].product, props.myRooms[i].products[3].onORoff
                      );
                      return <div>{str}</div>;
                    }
                  }
                  else{
                    return null;
                  }
                })()}
                <br />
                <a
                  className="btnP"
                  style={{ textDecoration: "none" }}
                  href="#!"
                  onClick={() => setShow(!show)}
                >
                  Add Product
                </a>
              </div>
            );
          }
        }
      })()}

      {show ? (
        <select
          className="select"
          onChange={(e) => setProduct({ product: e.target.value })}
        >
          <option value="none">Select Product..</option>
          <option value="Air_Conditioner">Air-Conditioner</option>
          <option value="Heater">Heater</option>
          <option value="Stereo">Stereo</option>
          <option value="Lamp">Lamp</option>
        </select>
      ) : null}

      {show ? (
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="btnP"
          onClick={() => {
            setShow(!show);
            props.roomProducts(product);
          }}
        >
          Add To Room
        </Link>
      ) : null}
      <br />
    </div>
  );
}


