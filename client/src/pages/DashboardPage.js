import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProgressTracker from '../components/ProgressTracker';
import LessonCard from '../components/LessonCard';
import '../styles/DashboardPage.css';

function DashboardPage({ user, onLogout }) {
  const [lessons, setLessons] = useState([]);
  const [userProgress, setUserProgress] = useState(null);
  const [currentUser, setCurrentUser] = useState(user);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [lessonsRes, userRes, progressRes] = await Promise.all([
        axios.get('/api/lessons'),
        axios.get(`/api/users/${user.id}`),
        axios.get(`/api/progress/${user.id}`),
      ]);
      setLessons(lessonsRes.data);
      setCurrentUser(userRes.data);
      setUserProgress(progressRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  if (loading) {
    return <div className="loading">Loading your journey...</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>🎸 Crystal's Guitar Journey</h1>
          <div className="user-info">
            <span>Welcome, {currentUser.username}!</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <ProgressTracker user={currentUser} userProgress={userProgress} />

        <section className="lessons-section">
          <h2>📚 Your Lessons</h2>
          <div className="lessons-grid">
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson._id}
                lesson={lesson}
                isCompleted={userProgress?.some(p => p.lessonId === lesson._id && p.completed)}
                onStart={() => navigate(`/lesson/${lesson.week}/${lesson.day}`)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;
