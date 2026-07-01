import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Certificate from '../components/Certificate';
import '../styles/CertificatePage.css';

function CertificatePage({ user }) {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get(`/api/certificates/${user.id}`);
      setCertificates(response.data);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading certificates...</div>;
  }

  return (
    <div className="certificate-page">
      <button className="back-btn" onClick={() => navigate('/dashboard')}>← Back to Dashboard</button>
      <h1>🏆 Your Certificates</h1>
      <div className="certificates-grid">
        {certificates.length === 0 ? (
          <p>No certificates yet. Keep practicing!</p>
        ) : (
          certificates.map((cert) => (
            <Certificate key={cert._id} certificate={cert} />
          ))
        )}
      </div>
    </div>
  );
}

export default CertificatePage;
