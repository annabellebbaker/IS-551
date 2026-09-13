import React from 'react';
import '../App.css';

function ProgressHeader({ completedModules = 0, totalModules = 12 }) {
  const progressPercentage = (completedModules / totalModules) * 100;

  return (
    <div className="progress-header">
      <div className="progress-header-content">
        <p className="progress-label">Learning Progress</p>
        <div className="progress-bar-large">
          <div 
            className="progress-bar-fill-large" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="progress-text">{completedModules} of {totalModules} modules completed</p>
      </div>
    </div>
  );
}

export default ProgressHeader;
