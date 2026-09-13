import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingScreen from './components/LandingScreen';
import LearningModule from './components/LearningModule';
import ProgressDashboard from './components/ProgressDashboard';
import './App.css';

function App() {
  const [userProgress, setUserProgress] = useState({
    completedModules: ['Introduction to 401k', 'Roth IRA Basics'],
    totalModules: 12,
    currentLevel: 2,
    certifications: ['Financial Foundations', 'Investment Starter'],
    recentModule: 'Mortgage Demystified'
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<LandingScreen userProgress={userProgress} />} />
        <Route path="/learn/:moduleId" element={<LearningModule userProgress={userProgress} />} />
        <Route path="/progress" element={<ProgressDashboard userProgress={userProgress} setUserProgress={setUserProgress} />} />
      </Routes>
    </Router>
  );
}

export default App;
