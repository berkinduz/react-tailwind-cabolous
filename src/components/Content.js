import React from "react";
import ImageOne from "../images/taxi1.jpg";
import ImageTwo from "../images/taxi2.png";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 " />
        <div className="center-content">
          <h2 className="text-2xl mb-2 font-bold">Your Taxi App</h2>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            mollitia.
          </p>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 " />
        <div className="center-content">
          <h2 className="text-2xl mb-2 font-bold">Right Here, Right Now</h2>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            pariatur.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
