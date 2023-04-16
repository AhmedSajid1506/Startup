import React, { useEffect } from "react";
import "../css/home.css";
import Header from "./home/Header";
import About from "./home/About";
import WhatWeDo from "./home/WhatWeDo";

const Home = (props) => {
  useEffect(() => {
    props.setShowNav(true);
  });

  return (
    <>
      <Header />
      <div className="bg-light">
        <div className="container pt-3">
          <About />
          <WhatWeDo />
        </div>
      </div>
    </>
  );
};

export default Home;

