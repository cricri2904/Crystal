import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LessonContent from '../components/LessonContent';
import '../styles/LessonPage.css';

function LessonPage({ user }) {
  const { week, day } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchLesson();
  }, [week, day]);

  const fetchLesson = async () => {
    try {
      const response = await axios.get(`/api/lessons/${week}/${day}`);
      setLesson(response.data);
    } catch (err) {
      setError('Lesson not found');
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteLesson = async () => {
    try {
      await axios.post(`/api/progress/${user.id}/${lesson._id}/complete`);
      alert('Lesson completed! Great job!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error completing lesson:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading lesson...</div>;
  }

  if (error) {
    return (
      <div className="lesson-container">
        <button className="back-btn" onClick={() => navigate('/dashboard')}>← Back to Dashboard</button>
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="lesson-container">
      <button className="back-btn" onClick={() => navigate('/dashboard')}>← Back to Dashboard</button>
      {lesson && (
        <LessonContent lesson={lesson} onComplete={handleCompleteLesson} />
      )}
    </div>
  );
}

export default LessonPage;
