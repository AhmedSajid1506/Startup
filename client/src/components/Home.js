import React, { useEffect } from "react";
import "../css/home.css";
import Header from "./home/Header";
import Services from "./home/Services";
import About from "./home/About";

const Home = (props) => {
  useEffect(() => {
    props.setShowNav(true);
  });

  return (
    <>
      <div className="">
        {/* <div className="container"> */}
            <Header />
        {/* </div> */}
      </div>
      <div className="bg-light">
        <div class="container">
          <About />
          <Services />
        </div>
      </div>
    </>
  );
};

export default Home;
