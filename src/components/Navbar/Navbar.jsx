import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container">

          {/* Logo */}
          <span
            className="navbar-brand"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/home")}
          >
            RAFIQ
          </span>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <div className="collapse navbar-collapse d-none d-md-flex d-lg-flex">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-row">

                <li className="nav-item">
                  <span
                    className="nav-link active"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/home")}
                  >
                    الصفحة الرئيسة
                  </span>
                </li>

                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/training")}
                  >
                    التمارين
                  </span>
                </li>

                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/monthly-test")}
                  >
                    الاختبارات
                  </span>
                </li>

                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/profile")}
                  >
                    الملف الشخصي
                  </span>
                </li>

              </ul>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler d-lg-none d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Mobile Offcanvas */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">RAFIQ</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              />
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                {/* Home */}
                <li className="nav-item">
                  <span
                    className="nav-link active"
                    style={{ cursor: "pointer" }}
                    data-bs-dismiss="offcanvas"
                    onClick={() => navigate("/home")}
                  >
                    الصفحة الرئيسة
                  </span>
                </li>

                {/* Exercises Dropdown */}
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ cursor: "pointer" }}
                  >
                    التمارين
                  </span>

                  <ul className="dropdown-menu">

                    <li>
                      <span
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/phase-one")}
                      >
                        التعرف الاجتماعي
                      </span>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    <li>
                      <span
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/phase-two")}
                      >
                        التفاعل الاجتماعي
                      </span>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    <li>
                      <span
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/phase-three")}
                      >
                        التواصل الاجتماعي
                      </span>
                    </li>

                  </ul>
                </li>

                {/* Tests Dropdown */}
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ cursor: "pointer" }}
                  >
                    الاختبارات
                  </span>

                  <ul className="dropdown-menu">

                    <li>
                      <span
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/monthly-test")}
                      >
                        اختبار الشهر
                      </span>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    <li>
                      <span
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/three-months-test")}
                      >
                        اختبار الثلاثة أشهر
                      </span>
                    </li>

                  </ul>
                </li>

                {/* Profile */}
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/profile")}
                  >
                    الملف الشخصي
                  </span>
                </li>

                <hr className="divider" />

                {/* Logout */}
                <li className="nav-item">
                  <span
                    className="nav-link text-danger"
                    style={{ cursor: "pointer" }}
                  >
                    تسجيل الخروج
                  </span>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}
