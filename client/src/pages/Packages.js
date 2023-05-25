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
    // if (pack) {
    //   let lastItem = pack.silver.length - 1;
    //   pack.silver[lastItem] += `<button>Order</button>`;
    //   console.log(pack.silver[lastItem] += `<button>Order</button>`);
    // }
  });

  return (
    <div className="container my-4 bg-white rounded-4 pt-3">
      <h1 className="text-center mb-3"><span className="f-primary">Logo Designing</span>Packages</h1>
      {/* <div className="row">
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
      </div> */}

      <div className="row">
        <div className="col-4 text-center p-2 border cursor">
          <i className="fa-solid fa-gem" style={{ color: "#c0c0c0" }}></i>Silver
        </div>
        <div className="col-4 text-center p-2 border cursor">
          <i className="fa-solid fa-gem" style={{ color: "#ffd700" }}></i>Gold
        </div>
        <div className="col-4 text-center p-2 border cursor">
          <i className="fa-solid fa-gem" style={{ color: "#b9f2ff" }}></i>Diamond
        </div>
      </div>
      <div className="row">
        <div className="col-7 p-0 d-flex flex-column">
          {pack &&
            pack.column1.map((data, index) => (
              <p className="border-bottom px-3 py-2" key={index}>
                {data}{":"}
              </p>
            ))}
        </div>
        <div className="col-4 p-0 d-flex flex-column">
          {pack &&
            pack.silver.map((data, index) =>
              data === "check" ? (
                <i
                  className="fa-solid fa-check border-bottom fs-4 py-2 text-success"
                  key={index}
                ></i>
              ) : data === "xmark" ? (
                <i
                  className="fa-solid fa-xmark border-bottom fs-4 py-2 text-danger"
                  key={index}
                ></i>
              ) : (
                <p className="border-bottom py-2" key={index}>
                  {data}
                </p>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Packages;
