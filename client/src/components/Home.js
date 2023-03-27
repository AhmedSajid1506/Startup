import React, { useEffect } from "react";
import headerBG from "../img/ui-design.png";
import "../css/home.css";

const Home = (props) => {
  useEffect(() => {
    props.setShowNav(true);
  });

  return (
    <div className="container-fluid bg-header p-5">
      <header className="row px-5">
        <div className="row align-items-center justify-content-center col-md-6 text-center p-5">
          <div className="bg-white py-5 px-4 rounded-4">
            <h2 className="heading">
              From Small Tasks to Big Projects,
              <br />
              <span className="heading f-primary">
                All Tasker has got you covered.
              </span>
            </h2>
            <div className="row mt-4">
              <input
                type="text"
                className="col-md-10 py-2 px-3 search-header"
                placeholder="Search"
              />
              <button type="button" className="col-md-2 searchBtn-header">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <img src={headerBG} alt="header-bg" className="w-100" />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="row p-5">
        <div className="col-md-4 mb-4">
          <div className="d-flex flex-column justify-content-center align-items-center bg-white py-3 text-center">
            <i className="fa-solid fa-palette fs-1 f-primary mb-3"></i>
            <h5 className="mb-4 mt-2">Web Designing</h5>
            <p>I provide full Web Development according to your needs.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex flex-column justify-content-center align-items-center bg-white py-3 text-center">
            <i className="fa-solid fa-chart-simple fs-1 f-primary mb-3"></i>
            <h5 className="mb-4 mt-2">Digital Marketing</h5>
            <p>I provide full Web Development according to your needs.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex flex-column justify-content-center align-items-center bg-white py-3 text-center">
          <i className="fa-solid fa-hashtag fs-1 f-primary mb-3"></i>
            <h5 className="mb-4 mt-2">Social Media Marketing</h5>
            <p>I provide full Web Development according to your needs.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex flex-column justify-content-center align-items-center bg-white py-3 text-center">
          <i className="fa-solid fa-envelope-circle-check fs-1 f-primary mb-3"></i>
            <h5 className="mb-4 mt-2">Email Marketing</h5>
            <p>I provide full Web Development according to your needs.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex flex-column justify-content-center align-items-center bg-white py-3 text-center"></div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex flex-column justify-content-center align-items-center bg-white py-3 text-center"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
