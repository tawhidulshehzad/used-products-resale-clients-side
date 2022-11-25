import React from "react";
import Category from "../../Category/Category/Category";
import Additional from "../Additional/Additional";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Category></Category>
      <Additional></Additional>
    </div>
  );
};

export default Home;
