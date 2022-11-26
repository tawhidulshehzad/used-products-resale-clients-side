import React from "react";
import oldbook from "../../../assets/banner.avif";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">So many books, so little time</h1>
          <p className="py-6 px-3">
            The person, be it gentleman or lady, who has not pleasure in a good
            novel, must be intolerably stupid
          </p>
          <button className="btn btn-primary">Get started</button>
        </div>
        <img src={oldbook} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
      </div>
    </div>
  );
};

export default Banner;
