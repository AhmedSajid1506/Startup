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
          {/* <div className="row">
            <div className="col-12 border px-5 py-2 fs-5 text-center fw-bold">
              <i className="fa-solid fa-gem" style={{ color: "#c0c0c0" }}></i>
              Silver
            </div>
            <div className="col-6 d-flex flex-column p-0">
              {pack &&
                pack.column1.map((data, i) => (
                  <p className="border p-2" key={i}>
                    {data}
                  </p>
                ))}
            </div>
            <div className="col-6 d-flex flex-column text-center p-0">
              {pack &&
                pack.silver.map((data, i) =>
                  data === "check" ? (
                    <i
                      className="fa-solid fa-check border fs-4 text-success"
                      key={i} style={{padding: ".575rem 0"}}
                    ></i>
                  ) : data === "xmark" ? (
                    <i
                      className="fa-solid fa-xmark border fs-4 text-danger"
                      key={i} style={{padding: ".575rem 0"}}
                    ></i>
                  ) : (
                    <p className="border p-2" key={i}>
                      {data}
                    </p>
                  )
                )}
            </div>
          </div><div className="row">
            <div className="col-12 border px-5 py-2 fs-5 text-center fw-bold">
              <i className="fa-solid fa-gem" style={{ color: "#ffd700" }}></i>
              Gold
            </div>
            <div className="col-6 d-flex flex-column p-0">
              {pack &&
                pack.column1.map((data, i) => (
                  <p className="border p-2" key={i}>
                    {data}
                  </p>
                ))}
            </div>
            <div className="col-6 d-flex flex-column text-center p-0">
              {pack &&
                pack.gold.map((data, i) =>
                  data === "check" ? (
                    <i
                      className="fa-solid fa-check border fs-4 text-success"
                      key={i} style={{padding: ".575rem 0"}}
                    ></i>
                  ) : data === "xmark" ? (
                    <i
                      className="fa-solid fa-xmark border fs-4 text-danger"
                      key={i} style={{padding: ".575rem 0"}}
                    ></i>
                  ) : (
                    <p className="border p-2" key={i}>
                      {data}
                    </p>
                  )
                )}
            </div>
          </div><div className="row">
            <div className="col-12 border px-5 py-2 fs-5 text-center fw-bold">
              <i className="fa-solid fa-gem" style={{ color: "#b9f2ff" }}></i>
              Diamond
            </div>
            <div className="col-6 d-flex flex-column p-0">
              {pack &&
                pack.column1.map((data, i) => (
                  <p className="border p-2" key={i}>
                    {data}
                  </p>
                ))}
            </div>
            <div className="col-6 d-flex flex-column text-center p-0">
              {pack &&
                pack.diamond.map((data, i) =>
                  data === "check" ? (
                    <i
                      className="fa-solid fa-check border fs-4 text-success"
                      key={i} style={{padding: ".575rem 0"}}
                    ></i>
                  ) : data === "xmark" ? (
                    <i
                      className="fa-solid fa-xmark border fs-4 text-danger"
                      key={i} style={{padding: ".575rem 0"}}
                    ></i>
                  ) : (
                    <p className="border p-2" key={i}>
                      {data}
                    </p>
                  )
                )}
            </div>
          </div> */}
          <div className="row">
            <div className="col-12 border px-5 py-2 fs-5 text-center fw-bold">
              <i className="fa-solid fa-gem" style={{ color: "#c0c0c0" }}></i>
              Silver
            </div>
            <div className="col-12 d-flex flex-column p-0">
              {pack &&
                pack.column1.map((data, i) => (
                  pack.silver[i] === "check" ? (
                    <p className="border p-2">
                      <i
                        className="fa-solid fa-check fs-4 text-success pe-2"
                        key={i}
                      ></i>{data}
                    </p>
                  ) : pack.silver[i] === "xmark" ? (
                    <p className="border p-2">
                      <i
                        className="fa-solid fa-xmark fs-4 text-danger pe-2"
                        key={i}
                      ></i>{data}
                    </p>

                  ) : (
                    <p className="border p-2" key={i}>
                      {pack.silver[i]} {data}
                    </p>
                  )
                ))}
            </div>
          </div>
          <div className="row">
            <div className="col-12 border px-5 py-2 fs-5 text-center fw-bold">
              <i className="fa-solid fa-gem" style={{ color: "#ffd700" }}></i>
              Gold
            </div>
            <div className="col-12 d-flex flex-column p-0">
              {pack &&
                pack.column1.map((data, i) => (
                  pack.gold[i] === "check" ? (
                    <p className="border p-2">
                      <i
                        className="fa-solid fa-check fs-4 text-success pe-2"
                        key={i}
                      ></i>{data}
                    </p>
                  ) : pack.gold[i] === "xmark" ? (
                    <p className="border p-2">
                      <i
                        className="fa-solid fa-xmark fs-4 text-danger pe-2"
                        key={i}
                      ></i>{data}
                    </p>

                  ) : (
                    <p className="border p-2" key={i}>
                      {pack.gold[i]} {data}
                    </p>
                  )
                ))}
            </div>
          </div>
          <div className="row">
            <div className="col-12 border px-5 py-2 fs-5 text-center fw-bold">
              <i className="fa-solid fa-gem" style={{ color: "#b9f2ff" }}></i>
              Diamond
            </div>
            <div className="col-12 d-flex flex-column p-0">
              {pack &&
                pack.column1.map((data, i) => (
                  pack.diamond[i] === "check" ? (
                    <p className="border p-2">
                      <i
                        className="fa-solid fa-check fs-4 text-success pe-2"
                        key={i}
                      ></i>{data}
                    </p>
                  ) : pack.diamond[i] === "xmark" ? (
                    <p className="border p-2">
                      <i
                        className="fa-solid fa-xmark fs-4 text-danger pe-2"
                        key={i}
                      ></i>{data}
                    </p>

                  ) : (
                    <p className="border p-2" key={i}>
                      {pack.diamond[i]} {data}
                    </p>
                  )
                ))}
            </div>
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
