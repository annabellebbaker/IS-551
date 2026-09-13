import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressHeader from "./ProgressHeader";
import "../App.css";

function ProgressDashboard({ userProgress, setUserProgress }) {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const allModules = [
    { id: 1, name: "Introduction to 401k", level: "Beginner", completed: true },
    { id: 2, name: "Roth IRA Basics", level: "Beginner", completed: true },
    {
      id: 3,
      name: "Mortgage Demystified",
      level: "Beginner",
      completed: false,
    },
    { id: 4, name: "Stock Market 101", level: "Beginner", completed: false },
    {
      id: 5,
      name: "Tax-Advantaged Investing",
      level: "Intermediate",
      completed: false,
    },
    {
      id: 6,
      name: "Cryptocurrency Basics",
      level: "Intermediate",
      completed: false,
    },
    {
      id: 7,
      name: "Diversification Strategies",
      level: "Advanced",
      completed: false,
    },
    {
      id: 8,
      name: "Real Estate Investing",
      level: "Advanced",
      completed: false,
    },
  ];

  const completionPercentage = Math.round(
    (userProgress.completedModules.length / allModules.length) * 100,
  );

  return (
    <div className="screen-container">
      <header className="header">
        <h1>FinLearn</h1>
        <p>Your Achievement Dashboard</p>
      </header>

      <ProgressHeader
        completedModules={userProgress.completedModules.length}
        totalModules={userProgress.totalModules}
      />

      <div className="container">
        <button className="btn btn-back" onClick={() => navigate("/")}>
          ← Back to Modules
        </button>

        <div className="content">
          {/* LEVEL & PROGRESS OVERVIEW */}
          <div
            style={{
              background: "linear-gradient(135deg, #A0342D 0%, #2D5F4F 100%)",
              color: "white",
              padding: "30px",
              borderRadius: "8px",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "white", marginBottom: "15px" }}>Your Level</h2>
            <div
              style={{
                fontSize: "3.5rem",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Level {userProgress.currentLevel}
            </div>
            <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
              {userProgress.completedModules.length} of {allModules.length}{" "}
              modules completed
            </p>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${completionPercentage}%` }}
              >
                {completionPercentage}%
              </div>
            </div>
            <p style={{ marginTop: "15px", opacity: 0.9 }}>
              {allModules.length - userProgress.completedModules.length} modules
              to unlock next level
            </p>
          </div>

          {/* CERTIFICATIONS */}
          <div className="section">
            <h3 className="section-title">🏆 Certifications Earned</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              {userProgress.certifications.map((cert, idx) => (
                <span key={idx} className="badge badge-earned">
                  ✓ {cert}
                </span>
              ))}
            </div>
          </div>

          {/* COMPLETED MODULES */}
          <div className="section">
            <h3 className="section-title">✅ Modules You've Completed</h3>
            <div className="grid-2">
              {allModules
                .filter((m) => m.completed)
                .map((module) => (
                  <div
                    key={module.id}
                    className="card"
                    style={{ borderLeft: "4px solid #4A7C59" }}
                  >
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>
                      {module.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#2D5F4F",
                        marginBottom: "10px",
                      }}
                    >
                      {module.level}
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: "#4A7C59",
                        color: "white",
                        padding: "6px 12px",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                      }}
                    >
                      Completed ✓
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* AVAILABLE MODULES */}
          <div className="section">
            <h3 className="section-title">📚 Keep Learning</h3>
            <p style={{ marginBottom: "20px" }}>
              Beginner modules available now. Advanced modules unlock as you
              progress.
            </p>
            <div className="grid-2">
              {allModules
                .filter((m) => !m.completed)
                .map((module) => (
                  <div
                    key={module.id}
                    className="card"
                    style={{ borderLeft: "4px solid #E8D9C8" }}
                  >
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>
                      {module.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#2D5F4F",
                        marginBottom: "10px",
                      }}
                    >
                      {module.level}
                    </p>
                    {module.level === "Beginner" ||
                    module.level === "Intermediate" ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate(`/learn/${module.id}`)}
                        style={{ fontSize: "0.9rem", padding: "8px 16px" }}
                      >
                        Start Now
                      </button>
                    ) : (
                      <span className="badge badge-locked">
                        🔒 Unlock at Level 5
                      </span>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* PROFILE SETTINGS */}
          <div
            className="section"
            style={{ borderTop: "2px solid #E8D9C8", paddingTop: "20px" }}
          >
            <button
              className="btn btn-outline"
              onClick={() => setShowProfile(!showProfile)}
              style={{ marginBottom: "15px" }}
            >
              {showProfile ? "▼ Profile Settings" : "▶ Profile Settings"}
            </button>

            {showProfile && (
              <div
                style={{
                  backgroundColor: "#F9F7F4",
                  padding: "20px",
                  borderRadius: "4px",
                  marginTop: "15px",
                }}
              >
                <p>
                  <strong>User Name:</strong> Alex Johnson
                </p>
                <p>
                  <strong>Email:</strong> alex.johnson@email.com
                </p>
                <p>
                  <strong>Joined:</strong> March 15, 2024
                </p>
                <p>
                  <strong>Learning Goal:</strong> Achieve Financial Independence
                  by 30
                </p>
                <p style={{ marginBottom: 0 }}>
                  <strong>Preferred Learning Pace:</strong> 3-5 modules per week
                </p>
              </div>
            )}
          </div>

          {/* NAVIGATION */}
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Back to Modules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressDashboard;
