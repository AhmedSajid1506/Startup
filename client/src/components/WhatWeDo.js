import React from "react";
import wwd1 from "../img/wwd-web.png";
import wwd2 from "../img/wwd-digiMart.png";
import wwd3 from "../img/wwd-gfx.png";
import wwd4 from "../img/wwd-vidEdit.png";
import wwd5 from "../img/wwd-write.png";
import wwd6 from "../img/wwd-3d.png";

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
          <img src={wwd1} alt="Web Development Packages" className="w-100" />
        </div>
      </div>
      <div className="row bg-white p-3 rounded-4 shadow mb-3">
        <div className="col-md-8">
          <h2 className="f-primary f2">Digital Marketing</h2>
          <p>We provide top-notch digital marketing services to boost your online presence and grow your business.</p>
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
          <img src={wwd2} alt="Digital Marketing Packages" className="w-100" />
        </div>
      </div>
      <div className="row bg-white p-3 rounded-4 shadow mb-3">
        <div className="col-md-8">
          <h2 className="f-primary f2">Graphic Designing</h2>
          <p>We offer professional graphic designing services to enhance your visual branding and communication.</p>
          <ul className="list-unstyled px-3 pt-2">
            <li className="job-items">Logo Designing</li>
            <li className="job-items">Print Designing (brochures, flyers, business cards, posters, etc.)</li>
            <li className="job-items">Packaging Designing</li>
            <li className="job-items">Web Designing (including UI/UX design)</li>
            <li className="job-items">Advertising and Marketing Designing</li>
          </ul>
          <button type="button" className="mt-3 btn-color py-2 px-3">Packages</button>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <img src={wwd3} alt="Graphic Designing Packages" className="w-100" />
        </div>
      </div>
      <div className="row bg-white p-3 rounded-4 shadow mb-3">
        <div className="col-md-8">
          <h2 className="f-primary f2">Video Editing</h2>
          <p>We offer professional video editing services to enhance and transform your footage.</p>
          <ul className="list-unstyled px-3 pt-2">
            <li className="job-items">Assembly Editing</li>
            <li className="job-items">Fine Cut Editing</li>
            <li className="job-items">Sound Editing</li>
            <li className="job-items">Visual Effects</li>
            <li className="job-items">Motion Graphics</li>
            <li className="job-items">Final Cut</li>
          </ul>
          <button type="button" className="mt-3 btn-color py-2 px-3">Packages</button>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <img src={wwd4} alt="Video Editing Packages" className="w-100" />
        </div>
      </div>
      <div className="row bg-white p-3 rounded-4 shadow mb-3">
        <div className="col-md-8">
          <h2 className="f-primary f2">Content Writing</h2>
          <p>We offer professional Content Writing services to meet your specific needs.</p>
          <ul className="list-unstyled px-3 pt-2">
            <li className="job-items">Blog writing</li>
            <li className="job-items">Article writing</li>
            <li className="job-items">Copywriting</li>
            <li className="job-items">Social media writing</li>
            <li className="job-items">Product description writing</li>
            <li className="job-items">Email marketing writing</li>
            <li className="job-items">eBook writing</li>
          </ul>
          <button type="button" className="mt-3 btn-color py-2 px-3">Packages</button>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <img src={wwd5} alt="Content Writing Packages" className="w-100" />
        </div>
      </div>
      <div className="row bg-white p-3 rounded-4 shadow mb-3">
        <div className="col-md-8">
          <h2 className="f-primary f2">3D Modeling</h2>
          <p>We offer professional 3D modeling services for various industries, applications and games.</p>
          <ul className="list-unstyled px-3 pt-2">
            <li className="job-items">Polygonal modeling</li>
            <li className="job-items">NURBS (Non-Uniform Rational B-Splines) modeling</li>
            <li className="job-items">Digital sculpting</li>
            <li className="job-items">Procedural modeling</li>
            <li className="job-items">Parametric modeling</li>
          </ul>
          <button type="button" className="mt-3 btn-color py-2 px-3">Packages</button>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <img src={wwd6} alt="3D Modeling Packages" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
