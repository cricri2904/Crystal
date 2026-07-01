import React from 'react';
import BunnyHill from './BunnyHill';
import '../styles/ProgressTracker.css';

function ProgressTracker({ user, userProgress }) {
  const calculateLevelProgress = () => {
    if (!userProgress) return 0;

    const levelLessonCounts = {
      'Absolute Beginner': 14, // 2 weeks * 7 days
      'Advanced Beginner': 14, // 2 weeks * 7 days
      'Intermediate': 14, // 2 weeks * 7 days
    };

    const currentLevelLessons = userProgress.filter(p => {
      // Filter lessons for current level
      return p.completed;
    });

    const lessonsForCurrentLevel = levelLessonCounts[user.currentLevel] || 14;
    const progress = (currentLevelLessons.length / lessonsForCurrentLevel) * 100;
    return Math.min(progress, 100);
  };

  const levelProgress = calculateLevelProgress();

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <h2>Your Progress</h2>
        <div className="level-info">
          <span className="current-level">{user.currentLevel}</span>
          <span className="overall-progress">{user.overallProgress?.toFixed(0)}% Complete</span>
        </div>
      </div>
      <BunnyHill progress={user.overallProgress} levelProgress={levelProgress} currentLevel={user.currentLevel} />
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${user.overallProgress}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressTracker;
