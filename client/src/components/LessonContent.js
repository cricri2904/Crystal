import React, { useState } from 'react';
import '../styles/LessonContent.css';

function LessonContent({ lesson, onComplete }) {
  const [activeTab, setActiveTab] = useState('recap');
  const [reflection, setReflection] = useState('');

  return (
    <div className="lesson-content">
      <div className="lesson-header">
        <h1>{lesson.title}</h1>
        <p className="song-focus">🎵 Focus Song: {lesson.song}</p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'recap' ? 'active' : ''}`}
          onClick={() => setActiveTab('recap')}
        >
          📝 Recap/Introduction ({lesson.recap?.duration || 5} min)
        </button>
        <button
          className={`tab ${activeTab === 'main' ? 'active' : ''}`}
          onClick={() => setActiveTab('main')}
        >
          🎸 Main Lesson ({lesson.mainLesson?.duration || 25} min)
        </button>
        <button
          className={`tab ${activeTab === 'plenary' ? 'active' : ''}`}
          onClick={() => setActiveTab('plenary')}
        >
          ✨ Plenary ({lesson.plenary?.duration || 5} min)
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'recap' && lesson.recap && (
          <div className="content-section">
            <h2>{lesson.recap.title}</h2>
            <p>{lesson.recap.content}</p>
          </div>
        )}

        {activeTab === 'main' && lesson.mainLesson && (
          <div className="content-section">
            <h2>{lesson.mainLesson.title}</h2>
            <p>{lesson.mainLesson.content}</p>
            {lesson.mainLesson.resources && lesson.mainLesson.resources.length > 0 && (
              <div className="resources">
                <h3>📚 Resources:</h3>
                <ul>
                  {lesson.mainLesson.resources.map((res, idx) => (
                    <li key={idx}>
                      <a href={res.url} target="_blank" rel="noopener noreferrer">
                        {res.type}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'plenary' && lesson.plenary && (
          <div className="content-section">
            <h2>{lesson.plenary.title}</h2>
            <p>{lesson.plenary.content}</p>
            <div className="reflection-box">
              <h3>🤔 Reflection:</h3>
              <p>{lesson.plenary.reflection}</p>
              <textarea
                placeholder="How did today's lesson feel? What did you find challenging or fun?"
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="lesson-actions">
        <button className="complete-btn" onClick={onComplete}>
          ✓ Mark as Complete
        </button>
      </div>
    </div>
  );
}

export default LessonContent;
