import React, { useEffect, useRef } from "react";
import Typed from "react-typed";

const Header = () => {

  useEffect(() => {
    if (document.documentElement.clientWidth < "494") {
      br.current.innerHTML = `<br />`;
      console.log(br.current);
    }
  });

  const textLines = ["", "Web Development.", "Digital Marketing.", "Graphic Designing.", "Video Editing.", "3D Modeling.", "Content Writing."];

  const br = useRef(null)
  return (
    <header>
      <div id="headerCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 0"></button>
          <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to="1" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to="2" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to="3" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to="4" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to="5" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to="6" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="7500">
            <div className="carousal0 p-5 text-white">
              <h1 className="display-5 f2 fw-bold">All <span className="header-title">Tasker</span></h1>
              <h4 className="f2">
                From Small Tasks to Big Projects,{" "}
                <span className="f2 header-title fw-bold"> All Tasker</span> has got you
                covered.
              </h4>
              <h1>
                We can do <span ref={br}></span>
                <Typed
                  className="header-title fw-bold"
                  strings={textLines}
                  typeSpeed={100}
                  backSpeed={60}
                  loop={true}
                />
              </h1>
              <button type="button" className="col-md-2 mt-2 btn-color py-2 px-4">
                Order Now
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carousal1 p-5 text-white">
              <h1 className="display-5 f2 fw-bold">Web Development</h1>
              <h4 className="f2">
              Empowering your digital presence with expert
                <span className="f2 header-title fw-bold"> Web Development.</span>
              </h4>
              <button type="button" className="col-md-2 mt-2 btn-color py-2 px-4">
                Order Now
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carousal2 p-5 text-white">
              <h1 className="display-5 f2 fw-bold">Digital Marketing</h1>
              <h4 className="f2">
              Boost Your Online Presence with our Expert
                <span className="f2 header-title fw-bold"> Digital Marketing </span>Solutions.
              </h4>
              <button type="button" className="col-md-2 mt-2 btn-color py-2 px-4">
                Order Now
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carousal3 p-5 text-white">
              <h1 className="display-5 f2 fw-bold">Graphic Designing</h1>
              <h4 className="f2">
              Bringing your vision to life through
                <span className="f2 header-title fw-bold"> Captivating Designs.</span>
              </h4>
              <button type="button" className="col-md-2 mt-2 btn-color py-2 px-4">
                Order Now
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carousal4 p-5 text-white">
              <h1 className="display-5 f2 fw-bold">Video Editing</h1>
              <h4 className="f2">
              Transform your raw footage into a cinematic masterpiece with our
                <span className="f2 header-title fw-bold"> Expert Video Editing</span> service.
              </h4>
              <button type="button" className="col-md-2 mt-2 btn-color py-2 px-4">
                Order Now
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carousal6 p-5 text-white">
              <h1 className="display-5 f2 fw-bold">Content Writing</h1>
              <h4 className="f2">
              Crafting words that
                <span className="f2 header-title fw-bold"> inspire, engage </span>and elevate your brand.
              </h4>
              <button type="button" className="col-md-2 mt-2 btn-color py-2 px-4">
                Order Now
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carousal5 p-5 text-white">
              <h1 className="display-5 f2 fw-bold">3D Modeling</h1>
              <h4 className="f2">
              Bringing your ideas to life with precision and creativity through
                <span className="f2 header-title fw-bold"> 3D Modeling.</span>
              </h4>
              <button type="button" className="col-md-2 mt-2 btn-color py-2 px-4">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#headerCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#headerCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div className="d-flex flex-column align-items-center justify-content-center p-md-5 p-3 text-white text-center">
        <h1 className="display-5 f2 fw-normal">All Tasker</h1>
        <h4 className="f2">
          From Small Tasks to Big Projects,{" "}
          <span className="f2 header-title fw-bold"> All Tasker</span> has got you
          covered.
        </h4>
        <h1>
          We can do <span ref={br}></span>
          <Typed
            className="f-primary fw-bold"
            strings={textLines}
            typeSpeed={100}
            backSpeed={60}
            loop={true}
          />
        </h1>
        <button type="button" className="col-md-2 mt-2 btn-color py-2 px-4">
          Order Now
        </button>
      </div> */}
    </header>
  );
};

export default Header;
