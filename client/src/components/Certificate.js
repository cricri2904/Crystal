import React from 'react';
import '../styles/Certificate.css';

function Certificate({ certificate }) {
  const unlockedDate = new Date(certificate.unlockedAt).toLocaleDateString();

  return (
    <div className="certificate">
      <div className="certificate-inner">
        <div className="certificate-header">
          <h2>🏆 Certificate of Achievement</h2>
        </div>
        <div className="certificate-body">
          <p className="certificate-text">{certificate.certificateText}</p>
          <p className="unlocked-date">Unlocked on {unlockedDate}</p>
        </div>
        <div className="certificate-footer">
          <p>Crystal Guitar Learning</p>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
