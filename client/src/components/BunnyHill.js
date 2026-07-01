import React from 'react';
import '../styles/BunnyHill.css';

function BunnyHill({ progress, levelProgress, currentLevel }) {
  // Calculate bunny position based on progress
  const bunnyPosition = Math.min(progress / 100, 0.95); // Max 95% to keep on visible area

  // Determine which level checkpoint the bunny is at
  const getCheckpointLevel = () => {
    if (progress >= 66.67) return 'Intermediate';
    if (progress >= 33.34) return 'Advanced Beginner';
    return 'Absolute Beginner';
  };

  const checkpointLevel = getCheckpointLevel();
  const levelProgressPercent = levelProgress;

  return (
    <div className="bunny-hill-container">
      <svg
        viewBox="0 0 800 600"
        className="hill-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Sky background */}
        <rect width="800" height="300" fill="#f0e6f0" />

        {/* Green hill */}
        <ellipse cx="400" cy="500" rx="350" ry="200" fill="#2D5016" />
        <path d="M 50 500 Q 400 250 750 500 L 750 600 L 50 600 Z" fill="#2D5016" />

        {/* Brown path */}
        <path d="M 400 500 Q 395 400 390 300 Q 387 200 385 100" stroke="#8B6914" strokeWidth="40" fill="none" />

        {/* Flowers - Daisies (left side) */}
        <circle cx="200" cy="420" r="15" fill="#FFE5B4" />
        <circle cx="185" cy="410" r="8" fill="#FFE5B4" />
        <circle cx="215" cy="410" r="8" fill="#FFE5B4" />
        <circle cx="190" cy="430" r="8" fill="#FFE5B4" />
        <circle cx="210" cy="430" r="8" fill="#FFE5B4" />
        <circle cx="200" cy="440" r="8" fill="#FFE5B4" />
        <circle cx="200" cy="410" r="8" fill="#FFA500" />

        {/* Flowers - Lilies (right side) */}
        <circle cx="600" cy="380" r="12" fill="#FFE5B4" />
        <circle cx="610" cy="385" r="12" fill="#FFE5B4" />
        <circle cx="590" cy="385" r="12" fill="#FFE5B4" />
        <circle cx="600" cy="395" r="12" fill="#FFE5B4" />
        <circle cx="600" cy="375" r="6" fill="#FFA500" />

        {/* Flowers - Violets (left side lower) */}
        <circle cx="150" cy="480" r="8" fill="#8B3A62" />
        <circle cx="140" cy="475" r="6" fill="#8B3A62" />
        <circle cx="160" cy="475" r="6" fill="#8B3A62" />
        <circle cx="145" cy="485" r="6" fill="#8B3A62" />
        <circle cx="155" cy="485" r="6" fill="#8B3A62" />

        {/* Flowers - Violets (right side lower) */}
        <circle cx="650" cy="460" r="8" fill="#8B3A62" />
        <circle cx="640" cy="455" r="6" fill="#8B3A62" />
        <circle cx="660" cy="455" r="6" fill="#8B3A62" />
        <circle cx="645" cy="465" r="6" fill="#8B3A62" />
        <circle cx="655" cy="465" r="6" fill="#8B3A62" />

        {/* Checkpoints */}
        {/* Checkpoint 1: Absolute Beginner (bottom) */}
        <g className="checkpoint checkpoint-1" opacity={progress >= 0 ? 1 : 0.3}>
          <circle cx="400" cy="480" r="25" fill="#B89BB4" stroke="#8B3A62" strokeWidth="2" />
          <text x="400" y="485" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">1</text>
        </g>

        {/* Checkpoint 2: Advanced Beginner (middle) */}
        <g className="checkpoint checkpoint-2" opacity={progress >= 33.34 ? 1 : 0.3}>
          <circle cx="395" cy="310" r="25" fill="#B89BB4" stroke="#8B3A62" strokeWidth="2" />
          <text x="395" y="315" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">2</text>
        </g>

        {/* Checkpoint 3: Intermediate (top) */}
        <g className="checkpoint checkpoint-3" opacity={progress >= 66.67 ? 1 : 0.3}>
          <circle cx="390" cy="130" r="25" fill="#B89BB4" stroke="#8B3A62" strokeWidth="2" />
          <text x="390" y="135" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">3</text>
        </g>

        {/* Bunny */}
        <g
          className="bunny"
          style={{
            transform: `translate(${400 + (bunnyPosition * 150) * Math.cos(Math.PI * 0.75)}px, ${500 - bunnyPosition * 400}px)`,
          }}
        >
          {/* Bunny body */}
          <ellipse cx="0" cy="0" rx="30" ry="40" fill="#9B9B9B" />
          {/* Bunny head */}
          <circle cx="0" cy="-35" r="25" fill="#9B9B9B" />
          {/* Bunny ears */}
          <ellipse cx="-15" cy="-65" rx="8" ry="25" fill="#9B9B9B" />
          <ellipse cx="15" cy="-65" rx="8" ry="25" fill="#9B9B9B" />
          <ellipse cx="-15" cy="-60" rx="4" ry="18" fill="#FFB6C1" />
          <ellipse cx="15" cy="-60" rx="4" ry="18" fill="#FFB6C1" />
          {/* Eyes */}
          <circle cx="-8" cy="-38" r="3" fill="black" />
          <circle cx="8" cy="-38" r="3" fill="black" />
          {/* Nose */}
          <circle cx="0" cy="-30" r="3" fill="#FFB6C1" />
          {/* Front paws */}
          <ellipse cx="-15" cy="25" rx="8" ry="15" fill="#9B9B9B" />
          <ellipse cx="15" cy="25" rx="8" ry="15" fill="#9B9B9B" />
        </g>

        {/* Guitar decoration */}
        <g className="guitar" transform="translate(700, 100)">
          {/* Guitar body */}
          <ellipse cx="0" cy="0" rx="20" ry="35" fill="#FFE5B4" stroke="#8B6914" strokeWidth="2" />
          {/* Guitar neck */}
          <rect x="-5" y="-50" width="10" height="50" fill="#8B6914" />
          {/* Strings */}
          <line x1="-3" y1="-50" x2="-3" y2="30" stroke="#D4A574" strokeWidth="1" />
          <line x1="-1" y1="-50" x2="-1" y2="30" stroke="#D4A574" strokeWidth="1" />
          <line x1="1" y1="-50" x2="1" y2="30" stroke="#D4A574" strokeWidth="1" />
          <line x1="3" y1="-50" x2="3" y2="30" stroke="#D4A574" strokeWidth="1" />
        </g>
      </svg>

      {/* Checkpoint info below SVG */}
      <div className="checkpoint-info">
        <div className="checkpoint-detail">
          <h3>Current Level: {checkpointLevel}</h3>
          <div className="level-progress-bar">
            <div className="level-progress-fill" style={{ width: `${levelProgressPercent}%` }}></div>
          </div>
          <p>{levelProgressPercent.toFixed(0)}% progress to next level</p>
        </div>
      </div>
    </div>
  );
}

export default BunnyHill;
