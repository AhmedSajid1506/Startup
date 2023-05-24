import React, { useEffect, useState } from "react";

const Packages = () => {
  const packageCtg = decodeURI(window.location.pathname.split("/").pop());

  const getPackage = async () => {
    const res = await fetch(
      `http://localhost:6001/api/v1/packages/${packageCtg}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await res.json();
    const [pack] = json;
    setPack(pack);
  };

  const [pack, setPack] = useState(null);

  useEffect(() => {
    getPackage();
    if (pack) {
      let lastItem = pack.silver.length-1;
      lastItem += `<button>Order</button>`;
      console.log(lastItem);
    }
  });

  return (
    <div className="container my-4">
      <h1 className="text-center mb-3">Logo Designing Packages</h1>
      <div className="row">
        <div className="col-3 border px-5 py-2 fs-5">Package</div>
        <div className="col-3 border px-5 py-2 fs-5 text-center fw-bold">
          <i className="fa-solid fa-gem" style={{ color: "#c0c0c0" }}></i>Silver
        </div>
        <div className="col-3 border px-5 py-2 fs-5 text-center fw-bold">
          <i className="fa-solid fa-gem" style={{ color: "#ffd700" }}></i>Gold
        </div>
        <div className="col-3 border px-5 py-2 fs-5 text-center fw-bold">
          <i className="fa-solid fa-gem" style={{ color: "#b9f2ff" }}></i>
          Diamond
        </div>
      </div>
      <div className="row">
        <div className="col-3 d-flex justify-content-center flex-column p-0">
          {pack &&
            pack.column1.map((data, index) => (
              <p className="border px-5 py-2" key={index}>
                {data}
              </p>
            ))}
        </div>
        <div className="col-3 d-flex justify-content-center flex-column text-center p-0">
          {pack &&
            pack.silver.map((data, index) =>
              data === "check" ? (
                <i
                  className="fa-solid fa-check border fs-4 py-2 text-success"
                  key={index}
                ></i>
              ) : data === "xmark" ? (
                <i
                  className="fa-solid fa-xmark border fs-4 py-2 text-danger"
                  key={index}
                ></i>
              ) : (
                <p className="border px-5 py-2" key={index}>
                  {data}
                </p>
              )
            )}
        </div>
        <div className="col-3 d-flex justify-content-center flex-column text-center p-0">
          {pack &&
            pack.gold.map((data, index) =>
              data === "check" ? (
                <i
                  className="fa-solid fa-check border fs-4 py-2 text-success"
                  key={index}
                ></i>
              ) : data === "xmark" ? (
                <i
                  className="fa-solid fa-xmark border fs-4 py-2 text-danger"
                  key={index}
                ></i>
              ) : (
                <p className="border px-5 py-2" key={index}>
                  {data}
                </p>
              )
            )}
        </div>
        <div className="col-3 d-flex justify-content-center flex-column text-center p-0">
          {pack &&
            pack.diamond.map((data, index) =>
              data === "check" ? (
                <i
                  className="fa-solid fa-check border fs-4 py-2 text-success"
                  key={index}
                ></i>
              ) : data === "xmark" ? (
                <i
                  className="fa-solid fa-xmark border fs-4 py-2 text-danger"
                  key={index}
                ></i>
              ) : (
                <p className="border px-5 py-2" key={index}>
                  {data}
                </p>
              )
            )}
        </div>
      </div>

      {/* <div className="row">
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
                {pack && <li className="list-group-item">{pack.ctg}</li>}
                {pack &&
                  pack.silver.map((data, index) => (
                    <li className="list-group-item" key={index}>
                      {data}
                    </li>
                  ))}
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
      </div> */}
    </div>
  );
};

export default Packages;
