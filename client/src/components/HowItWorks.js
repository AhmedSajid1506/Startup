import React from "react";
import hiw1 from "../img/hiw-first.png";
import hiw2 from "../img/hiw-second.png";
import hiw3 from "../img/hiw-third.png";
import hiw4 from "../img/hiw-forth.png";

const HowItWorks = () => {
  return (
    <div className="text-center">
      <h2 className="f2 f-primary">How It Works</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="h-100 bg-white d-flex flex-column align-items-center justify-content-between">
            <img className="w-50" src={hiw1} alt="HIW First Step" />
            <h5>Signup / Login</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="h-100 bg-white d-flex flex-column align-items-center justify-content-between">
            <img className="w-50" src={hiw2} alt="HIW Second Step" />
            <h5>See Packages</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="h-100 bg-white d-flex flex-column align-items-center justify-content-between">
            <img className="w-50" src={hiw3} alt="HIW Third Step" />
            <h5>Give Order</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="h-100 bg-white d-flex flex-column align-items-center justify-content-between">
            <img className="w-50" src={hiw4} alt="HIW Forth Step" />
            <h5>Get Your Order</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
