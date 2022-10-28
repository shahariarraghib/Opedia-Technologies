import React from "react";
import ProductShow from "../ProductPages/ProductShow/ProductShow";
import Navbar from "../Shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProductShow></ProductShow>
    </div>
  );
};

export default Home;
