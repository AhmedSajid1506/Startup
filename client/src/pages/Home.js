import React, { useEffect } from "react";
import "../css/home.css";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import WhatWeDo from "../components/WhatWeDo";
import OurProjects from "../components/OurProjects";

const Home = (props) => {
  useEffect(() => {
    props.setShowNav(true);
  });

  return (
    <>
      <Header />
      <div className="bg-light">
        <div className="container pt-3">
          <HowItWorks />
          <WhatWeDo />
          <OurProjects />
        </div>
      </div>
    </>
  );
};

export default Home;

