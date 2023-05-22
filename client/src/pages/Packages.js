import React from "react";

const Packages = () => {

  return (
    <div className="container">
      <h1 className="text-center">Graphic Design Packages</h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title">
                <i className="fa-solid fa-gem" style={{ color: "#c0c0c0" }}></i>{" "}
                Silver Package
              </h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">3 unique designs</li>
                <li className="list-group-item">High-resolution files</li>
                <li className="list-group-item">24-hour delivery</li>
                {/* {
                  gfx.map((data) =>
                    <li className="list-group-item">{data.logo}</li>
                  )
                } */}
              </ul>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title">
                <i className="fa-solid fa-gem" style={{ color: "#ffd700" }}></i>{" "}
                Gold Package
              </h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">5 unique designs</li>
                <li className="list-group-item">Source files included</li>
                <li className="list-group-item">48-hour delivery</li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title">
                <i className="fa-solid fa-gem" style={{ color: "#b9f2ff" }}></i>{" "}
                Diamond Package
              </h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">10 unique designs</li>
                <li className="list-group-item">Source files included</li>
                <li className="list-group-item">Customized revisions</li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
