import React, { useEffect } from "react";
import "../css/home.css";
import Header from "./home/Header";
import Services from "./home/Services";

const Home = (props) => {
  useEffect(() => {
    props.setShowNav(true);
  });

  return (
    <>
      <div className="bg-header">
        <div className="container">
            <Header />
        </div>
      </div>
      <div className="bg-light">
        <div class="container">
          <Services />
        </div>
      </div>
    </>
  );
};

export default Home;
