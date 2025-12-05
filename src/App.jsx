import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import TrainingPage from "./Pages/TrainingPage/TrainingPage";
import PhaseOne from "./Pages/TrainingPage/PhaseOne/PhaseOne";
import PhaseTwo from "./Pages/TrainingPage/PhaseTwo/PhaseTwo";
import PhaseThree from "./Pages/TrainingPage/PhaseThree/PhaseThree";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/rafiq" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/phase-one" element={<PhaseOne />} />
        <Route path="/phase-two" element={<PhaseTwo />} />
        <Route path="/phase-three" element={<PhaseThree />} />
      </Routes>
    </Router>
  );
}

export default App;
