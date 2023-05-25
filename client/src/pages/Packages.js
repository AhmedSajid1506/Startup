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
  const [showPack, setshowPack] = useState([]);
  const [mobCheck, setMobCheck] = useState(null);

  const mobileChecker = () => {
    if (document.documentElement.clientWidth <= "991") {
      setMobCheck(true);
    } else {
      setMobCheck(false);
    }
  };

  useEffect(() => {
    getPackage();
    mobileChecker();
    if (pack) {
      // let lastItem = pack.silver.length - 1;
      // pack.silver[lastItem] += `<button>Order</button>`;
      // console.log(pack.silver[lastItem] += `<button>Order</button>`);
    }
  });

  return (
    <>
      {mobCheck === true ? (
        <div className="container bg-white py-3">
          <h1 className="text-center mb-3">
            <span className="f-primary">Logo Designing </span>Packages
          </h1>
          <div className="row">
            <div
              className="col-4 d-flex justify-content-center align-items-center fw-bold fs-5 mobPackageActive py-2 border cursor"
              onClick={() => {
                setshowPack("silver");
              }}
            >
              <i className="fa-solid fa-gem" style={{ color: "#c0c0c0" }}></i>
              Silver
            </div>
            <div
              className="col-4 d-flex justify-content-center align-items-center fw-bold fs-5 py-2 border cursor bg-main"
              onClick={() => {
                setshowPack("gold");
              }}
            >
              <i className="fa-solid fa-gem" style={{ color: "#ffd700" }}></i>
              Gold
            </div>
            <div
              className="col-4 d-flex justify-content-center align-items-center fw-bold fs-5 py-2 border cursor bg-main"
              onClick={() => {
                setshowPack("diamond");
              }}
            >
              <i className="fa-solid fa-gem" style={{ color: "#b9f2ff" }}></i>
              Diamond
            </div>
          </div>
          <div className="col-12 p-0 d-flex flex-column">
            {showPack &&
              pack.column1.map((data, i) =>
                pack.showPack[i] === "check" ? (
                  <p
                    className="border-bottom py-2 d-flex align-items-center"
                    key={i}
                  >
                    <i className="fa-solid fa-check fs-4 text-success me-2"></i>
                    {data}
                  </p>
                ) : pack.showPack[i] === "xmark" ? (
                  <p
                    className="border-bottom py-2 d-flex align-items-center"
                    key={i}
                  >
                    <i className="fa-solid fa-xmark fs-4 text-danger me-2"></i>
                    {data}
                  </p>
                ) : (
                  <p className="border-bottom py-2" key={i}>
                    {pack.showPack[i]} {data}
                  </p>
                )
              )}
          </div>
        </div>
      ) : (
        <div className="container my-4 bg-white rounded-4 pt-3">
          <h1 className="text-center mb-3">
            <span className="f-primary">Logo Designing </span>Packages
          </h1>
          <div className="row">
            <div className="col-3 border px-5 py-2 fs-5">Package</div>
            <div className="col-3 border px-5 py-2 fs-5 text-center fw-bold">
              <i className="fa-solid fa-gem" style={{ color: "#c0c0c0" }}></i>
              Silver
            </div>
            <div className="col-3 border px-5 py-2 fs-5 text-center fw-bold">
              <i className="fa-solid fa-gem" style={{ color: "#ffd700" }}></i>
              Gold
            </div>
            <div className="col-3 border px-5 py-2 fs-5 text-center fw-bold">
              <i className="fa-solid fa-gem" style={{ color: "#b9f2ff" }}></i>
              Diamond
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-center flex-column p-0">
              {pack &&
                pack.column1.map((data, i) => (
                  <p className="border px-5 py-2" key={i}>
                    {data}
                  </p>
                ))}
            </div>
            <div className="col-3 d-flex justify-content-center flex-column text-center p-0">
              {pack &&
                pack.silver.map((data, i) =>
                  data === "check" ? (
                    <i
                      className="fa-solid fa-check border fs-4 py-2 text-success"
                      key={i}
                    ></i>
                  ) : data === "xmark" ? (
                    <i
                      className="fa-solid fa-xmark border fs-4 py-2 text-danger"
                      key={i}
                    ></i>
                  ) : (
                    <p className="border px-5 py-2" key={i}>
                      {data}
                    </p>
                  )
                )}
            </div>
            <div className="col-3 d-flex justify-content-center flex-column text-center p-0">
              {pack &&
                pack.gold.map((data, i) =>
                  data === "check" ? (
                    <i
                      className="fa-solid fa-check border fs-4 py-2 text-success"
                      key={i}
                    ></i>
                  ) : data === "xmark" ? (
                    <i
                      className="fa-solid fa-xmark border fs-4 py-2 text-danger"
                      key={i}
                    ></i>
                  ) : (
                    <p className="border px-5 py-2" key={i}>
                      {data}
                    </p>
                  )
                )}
            </div>
            <div className="col-3 d-flex justify-content-center flex-column text-center p-0">
              {pack &&
                pack.diamond.map((data, i) =>
                  data === "check" ? (
                    <i
                      className="fa-solid fa-check border fs-4 py-2 text-success"
                      key={i}
                    ></i>
                  ) : data === "xmark" ? (
                    <i
                      className="fa-solid fa-xmark border fs-4 py-2 text-danger"
                      key={i}
                    ></i>
                  ) : (
                    <p className="border px-5 py-2" key={i}>
                      {data}
                    </p>
                  )
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Packages;
