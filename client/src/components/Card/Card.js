import React from "react";
// import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ onClick, trading_pair, image_url, comment, user_id, id }) {

  return (
    <div className="col-md-4 my-2" style={{ background: "white" }}>
      <div
        className="Card card p-2"
        style={{ background: "#F2F2F2", border: "2px solid grey", height: "auto"}}
      >
        <div className="text-right">
          {" "}
          <small>Charts</small>{" "}
        </div>
        <div
          className="text-center mt-3 p-3
            "
        >
          {" "}
          <img src={image_url} width="350" alt="Logo" />{" "}
          <span className="d-block font-weight-bold">{trading_pair}</span>
          <hr /> <span>{user_id}</span>
          <div className="d-flex flex-row align-items-center justify-content-center">
            {" "}
            {/*<i className="fa fa-map-marker"></i> */}
            <small className="ml-1 px-2"> {comment}</small>{" "}
          </div>
          <div className="d-flex justify-content-between mt-3">
            {" "}
            {
              <button className="btn btn-primary btn-sm">{onClick}</button>
            }
            {/* <Link to={"/charts-page/" + id}>
              <button className="btn btn-primary btn-sm active">
                Read More
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
