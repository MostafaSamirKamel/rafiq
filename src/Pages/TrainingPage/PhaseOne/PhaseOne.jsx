import React from "react";
import TrainingNav from "../TrainingNav/TrainingNav";

export default function PhaseOne() {
  return (
    <>
    <TrainingNav/>
      <div className="container head-container">
        <h4 className="text-center mt-5 fw-bold">التعرف الاجتماعي</h4>

        <div className="row mt-3">
          {/* =================== كارد الاشخاص =================== */}
          <div className="col-md-4 mb-4">
            <div className="skills-card p-3 rounded-4">
              <h6 className="fw-bold text-end">التعرف علي الاشخاص</h6>
              <p className="small text-muted text-end">
                تمارين التعرف علي الاشخاص.
              </p>
              <div className="progress mb-3">
                <div
                  className="progress-bar skill-1"
                  style={{ width: "20%" }}
                ></div>
                <span>20%</span>
              </div>

              {/* تمارين الاشخاص */}
              <div className="exercise-cards">
                {[
                  "الأب",
                  "الأم",
                  "الإخوات",
                  "الجد والجدة",
                  "الخال والعم",
                  "الأصدقاء المقربين",
                  "الجيران",
                  "الدكتور المعالج",
                  "مدرسة الحضانة أو الفصل",
                ].map((person, i) => (
                  <div
                    key={i}
                    className="exercise-card p-2 mb-2 rounded-3 text-end"
                  >
                    {person}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =================== كارد الاماكن =================== */}
          <div className="col-md-4 mb-4">
            <div className="skills-card p-3 rounded-4">
              <h6 className="fw-bold text-end">التعرف علي الاماكن</h6>
              <p className="small text-muted text-end">
                تمارين التعرف علي الاماكن.
              </p>
              <div className="progress mb-3">
                <div
                  className="progress-bar skill-2"
                  style={{ width: "40%" }}
                ></div>
                <span>40%</span>
              </div>

              {/* تمارين الاماكن */}
              <div className="exercise-cards">
                {[
                  "المدرسة",
                  "البيت",
                  "المركز",
                  "الشارع اللي ساكن فيه",
                  "الحمام",
                  "المطبخ",
                  "غرفة نومه وسريره",
                  "مكتبه",
                  "غرفة الألعاب",
                ].map((place, i) => (
                  <div
                    key={i}
                    className="exercise-card p-2 mb-2 rounded-3 text-end"
                  >
                    {place}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =================== كارد الاشياء الاساسية =================== */}
          <div className="col-md-4 mb-4">
            <div className="skills-card p-3 rounded-4">
              <h6 className="fw-bold text-end">التعرف علي الاشياء الاساسية</h6>
              <p className="small text-muted text-end">
                تمارين التعرف علي الاشياء الاساسية.
              </p>
              <div className="progress mb-3">
                <div
                  className="progress-bar skill-3"
                  style={{ width: "60%" }}
                ></div>
                <span>60%</span>
              </div>

              {/* تمارين الاشياء الاساسية */}
              <div className="exercise-cards">
                {[
                  "لعب معينة يستخدمها باستمرار",
                  "صور لبعض الخضار والفواكه الشائعة: طماطم، خيار، فلفل، بصل، بطاطس، تفاح، موز، برتقال",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="exercise-card p-2 mb-2 rounded-3 text-end"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
