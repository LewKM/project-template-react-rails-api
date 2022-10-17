 import React, {  } from "react";
import image from "./1304039 (1).jpg";
import { Link } from "react-router-dom";
export default function Home({user}) {

  const txt = {
    color: "#0D7CAC",
    fontWeight: "bold",
  };
  const colorTxt = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <div className="container-fluid my-1  p-5 ">
        <div className="row">
          <div className="col-12 col-lg-6 pt-3">
            <div className="mb-3">
              <h3 style={txt} className="">
                WELCOME {user ? user.username : ""} TO SPERIZONS FOREX Ideas Platform.
                
              </h3>
            </div>
            <div className="">
        <p className="py-3">
          This is a forex forum app that allows you to create,
          Welcome to the trading chat discussion website! This is a place where traders can come to share ideas and discuss the markets. Feel free to post your ideas and questions here, and please be respectful of other members. Let's make this a great place to learn and grow together!
        </p>
        <p className="py-3">
        Forex trading is the act of simultaneously buying one currency and selling another. The purpose of forex trading is to exchange one currency for another in order to make a profit. For example, if a trader believes that the US dollar will appreciate against the Japanese yen, they will buy US dollars and sell Japanese yen.
        </p>
        <p className="py-3">
        In the forex market, "smart money" is a term used to describe the collective actions of large professional traders, such as banks, hedge funds, and other institutional investors. These traders have deep pockets and access to information and resources that retail traders do not. As a result, they often move the market in predictable ways.
        </p>
        <p className="py-3">
          By understanding how the smart money moves the market, retail traders can get a leg up on the competition. There are a number of ways to track smart money, but one of the most popular is through the use of order flow data. This data shows the number of buy and sell orders placed at different price levels and can give traders a good idea of where the smart money is active.
        </p>
            </div>
            <div className="my-4">
              <button
                type="button"
                className="btn btn-lg"
                style={{
                  border: "none",
                  color: "white",
                  backgroundColor: "black",
                  fontSize: "15px",
                  fontWeight: "900",
                }}
              >
                <center>
                	<Link to="/charts-page" style={colorTxt}>
                  Check out the Charts
                </Link>
                </center>
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-3 pt-xs-4">
            <img src={image} className="img-fluid" alt="meet -up" />
          </div>
        </div>
      </div>
    </div>
  );
}
