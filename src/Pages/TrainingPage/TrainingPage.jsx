import React from "react";
import { useNavigate } from "react-router-dom";
import TrainingNav from "./TrainingNav/TrainingNav";
import "./TrainingPage.css";

export default function TrainingPage() {
  const navigate = useNavigate();

  const skills = [
  {
    title: "التعرف الاجتماعي",
    description: "تمارين التعرف الاجتماعي.",
    progress: 20,
    exercises: ["التعرف علي الاشخاص", "التعرف علي الاماكن", "التعرف علي الاشياء الاساسية"],
    route: "/phase-one", 
  },
  {
    title: "التفاعل الاجتماعي",
    description: "تمارين التفاعل الاجتماعي.",
    progress: 40,
    exercises: ["فهم الاشارات الاجتماعية", "اللعب التعاوني و تبادل الادوار"],
    route: "/phase-two",
  },
  {
    title: "التواصل الاجتماعي",
    description: "تمارين التواصل الاجتماعي.",
    progress: 60,
    exercises: ["تمرين 1", "تمرين 2", "تمرين 3"],
    route: "/phase-three",
  },
];


  return (
    <>
      <TrainingNav />
      <div className="container head-container">
        <h4 className="text-center mt-5 fw-bold">
          تنمية و تطوير مهارة التواصل الاجتماعي
        </h4>

        <div className="row mt-3">
          {skills.map((skill, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div
                className="skills-card p-3 rounded-4"
                style={{ cursor: skill.route ? "pointer" : "default" }}
                onClick={() => skill.route && navigate(skill.route)}
              >
                <h6 className="fw-bold text-end">{skill.title}</h6>
                <p className="small text-muted text-end">{skill.description}</p>
                <div className="progress mb-3">
                  <div
                    className={`progress-bar skill-${idx + 1}`}
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                  <span>{skill.progress}%</span>
                </div>

                <div className="exercise-cards mt-2">
                  {skill.exercises.map((ex, i) => (
                    <div key={i} className="exercise-card p-2 mb-2 rounded-3 text-end">
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
