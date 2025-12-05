import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="home-container container">
        {/* =================== Section Title =================== */}
        <h2 className="text-center my-4 welcome-title"> مرحباً الطفل </h2>

        {/* =================== Main Blue Card =================== */}
        <div className="main-card p-4 rounded-4 text-white mx-auto">
          <div className="row align-items-center">
            {/* Image */}
            <div className="col-4">
              <img
                src="/assets/session.png"
                className="img-fluid"
                alt="session"
              />
            </div>

            {/* Text */}
            <div className="col-8 text-end">
              <h4 className="fw-bold mb-2">متغير ب المرحله التي بها الطفل</h4>
              <button className="btn btn-light px-4 py-2 fw-semibold  w-50">
                ابدأ
              </button>
            </div>
          </div>
        </div>

        {/* =================== Skills Section =================== */}
        <h4 className="text-center mt-5 fw-bold">
          تنمية و تطوير مهاره التواصل الاجتماعي
        </h4>

        <div className="row mt-3">
          {/* ========== كارد التعرف الاجتماعي ========== */}
          <div className="col-md-4">
            <div
              className="skills-card p-3 rounded-4"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/phase-one")}
            >
              <h6 className="fw-bold text-end">التعرف الاجتماعي</h6>
              <p className="small text-muted text-end">
                تمارين التعرف الاجتماعي.
              </p>
              <div className="progress">
                <div
                  className="progress-bar skill-1"
                  style={{ width: "20%" }}
                ></div>
                <span>20%</span>
              </div>
            </div>
          </div>

          {/* ========== كارد التفاعل الاجتماعي ========== */}
          <div className="col-md-4">
            <div
              className="skills-card p-3 rounded-4"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/phase-two")}
            >
              <h6 className="fw-bold text-end">التفاعل الاجتماعي</h6>
              <p className="small text-muted text-end">
                تمارين التفاعل الاجتماعي.
              </p>
              <div className="progress">
                <div
                  className="progress-bar skill-2"
                  style={{ width: "40%" }}
                ></div>
                <span>40%</span>
              </div>
            </div>
          </div>

          {/* ========== كارد التواصل الاجتماعي ========== */}
          <div className="col-md-4">
            <div
              className="skills-card p-3 rounded-4"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/phase-three")}
            >
              <h6 className="fw-bold text-end">التواصل الاجتماعي</h6>
              <p className="small text-muted text-end">
                تمارين التواصل الاجتماعي.
              </p>
              <div className="progress">
                <div
                  className="progress-bar skill-3"
                  style={{ width: "60%" }}
                ></div>
                <span>60%</span>
              </div>
            </div>
          </div>
        </div>

        {/* =================== Assessments =================== */}
        <div className="row text-end mt-4">
          {/* Monthly */}
          <div className="col-6">
            <div className="small-card p-3 rounded-4">
              <h6 className="fw-bold text-primary">التقييم الشهري</h6>
              <p className="small text-muted">
                تقييم شهري لمتابعة التطورات خطوة بخطوة.
              </p>
              <button className="btn btn-primary w-50 m-auto d-block mt-2">
                ابدأ الاختبار
              </button>
            </div>
          </div>

          {/* 3 Months */}
          <div className="col-6">
            <div className="small-card p-3 rounded-4">
              <h6 className="fw-bold text-primary">اختبار الـ 3 شهور</h6>
              <p className="small text-muted">
                تقييم شامل يتم كل ثلاثة أشهر لقياس التقدم العام.
              </p>
              <button className="btn btn-primary w-50 m-auto d-block mt-2">
                ابدأ الاختبار
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
