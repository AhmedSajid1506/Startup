import React, { useEffect } from "react";
import "../css/home.css";
import Header from "./home/Header";
import Services from "./home/Services";

const Home = (props) => {
  useEffect(() => {
    props.setShowNav(true);
  });
  

  return (
    <div className="container">
      <Header />
      <Services />
    </div>
  );
};

export default Home;
