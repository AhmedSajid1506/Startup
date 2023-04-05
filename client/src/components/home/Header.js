import React, {useEffect, useRef} from "react";
import Typed from "react-typed";
import headerBG from "../../img/digital-marketing.png";

const Header = () => {

  useEffect(() => {
    if (document.documentElement.clientWidth < "494") {
    br.current.innerHTML = `<br />`;
    console.log(br.current);
  }
  });

  const textLines = ["", "Web Development.", "Digital Marketing.", "UI/UX Designing."];

  const br = useRef(null)
  return (
    <header className="row">
      <div className="d-flex flex-column align-items-center justify-content-center p-md-5 p-3 text-white text-center">
        <h1 className="display-5 f2 fw-normal">All Tasker</h1>
        <h4 className="f2">
          From Small Tasks to Big Projects,{" "}
          <span className="f2 f-primary fw-bold"> All Tasker</span> has got you
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
      </div>
      {/* <div className="col-md-5">
        <div>
          <img src={headerBG} alt="header-bg" className="w-100" />
        </div>
      </div> */}
    </header>
  );
};

export default Header;