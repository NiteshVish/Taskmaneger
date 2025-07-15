import React from "react";

export default function Footer(props) {
  return (
    <>
      <div
        className="Footermain"
        style={{ background: "#111827", width: "100%", paddingLeft: "70px" }}
      >
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column  ">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 "
                    style={{ color: "white" }}
                  >
                    Taskwhiz Business
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 "
                    style={{ color: "white" }}
                  >
                    Teach On Taskwhiz
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 "
                    style={{ color: "white" }}
                  >
                    Get the App
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 "
                    style={{ color: "white" }}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 "
                    style={{ color: "white" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 "
                    style={{ color: "white" }}
                  >
                    Careers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 "
                    style={{ color: "white" }}
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 "
                    style={{ color: "white" }}
                  >
                    Help and Support
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 "
                    style={{ color: "white" }}
                  >
                    Affiliate
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 "
                    style={{ color: "white" }}
                  >
                    Investors
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1  ">
              <h1
                style={{
                  color: "#3C69C0",
                  fontWeight: "bold",
                  fontFamily: "Pacifico,serif",
                //   fontFamily: "'Dancing Script',cursive",
                  fontSize: "60px",
                //   marginTop: "20px",
                  paddingLeft: "400px",
                //   lineHeight: "9px",
                }}
              >
                Taskwhiz
              </h1>
            </div>
            <div
              className="d-flex justify-content-between "
              style={{ paddingLeft: "1000px"}}
            >
              <p style={{ color: "white" }}>
                {/* {" "} */}
                &copy; 2025 Company, Inc. All rights reserved.
              </p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a
                    className="link-body-emphasis"
                    href="#"
                    aria-label="Instagram"
                  >
                    <svg className="bi" width="24" height="24">
                      <use xlink:href="#instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    className="link-body-emphasis"
                    href="#"
                    aria-label="Facebook"
                  >
                    <svg
                      className="bi"
                      width="24"
                      height="24"
                      aria-hidden="true"
                    >
                      <use xlink:href="#facebook"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

