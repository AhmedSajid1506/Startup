import React, { useEffect, useState } from "react";

const Packages = () => {

  const packageCtg = decodeURI(window.location.pathname.split('/').pop());

  const getPackage = async () => {
  const res = await fetch(`http://localhost:6001/api/v1/packages/${packageCtg}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await res.json();
    setPack(json);
  }

  const packInitial = []
  const [pack, setPack] = useState(packInitial)

  useEffect(() => {
    getPackage();
    const [packs] = pack;
  })
  

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
                <li className="list-group-item">{packs.ctg}</li>
                {
                  pack.map((data) =>
                    <li className="list-group-item" key={data.id}>{data.logo}</li>
                  )
                }
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
