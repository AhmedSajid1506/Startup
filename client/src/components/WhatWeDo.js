import React from "react";
import wwd1 from "../img/wwd-web.png";
import wwd2 from "../img/wwd-digiMart.png";
import wwd3 from "../img/wwd-web.png";
import wwd4 from "../img/wwd-web.png";
import wwd5 from "../img/wwd-web.png";
import wwd6 from "../img/wwd-web.png";

const WhatWeDo = () => {
  return (
    <div>
      <div className="text-center"><h2 className="f2 f-primary">What We Do</h2></div>
      <div className="row bg-white p-3 rounded-4 shadow mb-3">
        <div className="col-md-8">
          <h2 className="f-primary f2">Web Development</h2>
          <p>We deliver custom web development services that are responsive, user-friendly, visually appealing, and aligned with our client's business goals. </p>
          <ul className="list-unstyled px-3 pt-2">
            <li className="job-items">Front-End Development</li>
            <li className="job-items">Back-End Development</li>
            <li className="job-items">Full Stack Development</li>
            <li className="job-items">Web Designing</li>
            <li className="job-items">Responsive Designing</li>
            <li className="job-items">E-Commerce Website</li>
            <li className="job-items">PSD to Html</li>
          </ul>
          <button type="button" className="mt-3 btn-color py-2 px-3">Packages</button>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <img src={wwd1} alt="WebDev Images" className="w-100" />
        </div>
      </div><div className="row bg-white p-3 rounded-4 shadow mb-3">
        <div className="col-md-8">
          <h2 className="f-primary f2">Digital Marketing</h2>
          <p>We deliver custom web development services that are responsive, user-friendly, visually appealing, and aligned with our client's business goals. </p>
          <ul className="list-unstyled px-3 pt-2">
            <li className="job-items">Social media marketing</li>
            <li className="job-items">Search engine optimization (SEO)</li>
            <li className="job-items">Pay-per-click advertising (PPC)</li>
            <li className="job-items">Content marketing</li>
            <li className="job-items">Affiliate marketing</li>
            <li className="job-items">Email marketing</li>
          </ul>
          <button type="button" className="mt-3 btn-color py-2 px-3">Packages</button>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <img src={wwd2} alt="WebDev Images" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
