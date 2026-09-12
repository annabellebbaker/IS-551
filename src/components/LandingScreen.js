import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function LandingScreen() {
  const modules = [
    { id: 'introduction-401k', name: 'Introduction to 401k', icon: '💼' },
    { id: 'roth-ira', name: 'Roth IRA Basics', icon: '📊' },
    { id: 'mortgage', name: 'Mortgage Demystified', icon: '🏠' },
    { id: 'stocks', name: 'Stock Market 101', icon: '📈' }
  ];

  return (
    <div className="screen-container">
      <header className="header">
        <h1>FinLearn</h1>
        <p>Your Financial Future Starts Here</p>
      </header>

      <div className="container">
        <div className="affordance">
          <p className="affordance-text">
            Learn financial literacy from real professionals in 5-minute lessons. 
            Get ahead, invest confidently, earn certifications.
          </p>
        </div>

        <div className="content">
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Choose Your Learning Path</h2>
          
          <div className="grid-2">
            {modules.map((module) => (
              <Link to={`/learn/${module.id}`} style={{ textDecoration: 'none' }} key={module.id}>
                <div className="card" style={{ cursor: 'pointer', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{module.icon}</div>
                  <h3 style={{ marginBottom: '10px' }}>{module.name}</h3>
                  <p>Start learning in 5-minute bites</p>
                  <button className="btn btn-primary">Begin Lesson</button>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <h3>Track Your Progress</h3>
            <Link to="/progress">
              <button className="btn btn-secondary">View My Dashboard</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
