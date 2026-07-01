import React from 'react';
import '../styles/LessonCard.css';

function LessonCard({ lesson, isCompleted, onStart }) {
  return (
    <div className={`lesson-card ${isCompleted ? 'completed' : ''}`}>
      <div className="lesson-header">
        <h3>Week {lesson.week}, Day {lesson.day}</h3>
        <span className={`level-badge ${lesson.level.toLowerCase().replace(' ', '-')}`}>
          {lesson.level}
        </span>
      </div>
      <h4>{lesson.title}</h4>
      <p className="song">🎵 Song: {lesson.song}</p>
      <ul className="objectives">
        {lesson.objectives.slice(0, 2).map((obj, idx) => (
          <li key={idx}>{obj}</li>
        ))}
      </ul>
      <div className="session-time">
        <span>⏱️ {lesson.mainLesson?.duration || 30} mins</span>
      </div>
      {isCompleted && <div className="completed-badge">✓ Completed</div>}
      <button className="start-btn" onClick={onStart}>
        {isCompleted ? 'Review' : 'Start Lesson'}
      </button>
    </div>
  );
}

export default LessonCard;
