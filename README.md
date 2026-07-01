# Crystal - Guitar Learning Journey App 🎸

A beautiful, interactive 6-week guitar learning app designed to help you progress from Absolute Beginner to Intermediate level while maintaining consistency and enjoying the journey!

## Features

- 🎯 **6-Week Structured Curriculum**: Progresses through Absolute Beginner → Advanced Beginner → Intermediate
- 🐰 **Interactive Progress Tracker**: A bunny climbing a hill with visual progress indicators
- 🎓 **Song-Based Lessons**: Each day focuses on learning through a specific song
- 📊 **Progress Dashboard**: Track daily practice sessions and achievements
- 🏆 **Certificates**: Unlock digital certificates at each level milestone
- 🎨 **Beautiful Design**: Wildberry, lavender, and pastel yellow color theme with animated SVG illustrations

## Project Structure

```
Crystal/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.js
│   └── package.json
├── server/                  # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── config/
├── server.js
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/cricri2904/Crystal.git
cd Crystal
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Install frontend dependencies**
```bash
cd client
npm install
cd ..
```

4. **Configure environment variables**
```bash
cp .env.example .env
```
Edit `.env` with your MongoDB URI and JWT secret.

5. **Start the development server**
```bash
npm run dev
```

This will start both the Node.js backend (port 5000) and React frontend (port 3000).

## Curriculum Overview

### Week 1-2: Absolute Beginner
- Basic open chords (G, C, D, Em, Am)
- Simple down-strums
- Building calluses and coordination

### Week 3-4: Advanced Beginner
- Up-strums and syncopated patterns
- F major barre chord introduction
- Single-note riffs
- Minor Pentatonic scale (1st position)

### Week 5-6: Intermediate
- Major and minor barre chords
- All five pentatonic scale positions
- Hammer-ons, pull-offs, slides, vibrato
- Singing while playing

## Technologies Used

- **Frontend**: React, SVG for animations
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Styling**: CSS3 with custom properties

## Daily Lesson Structure

Each session is 30-45 minutes:
1. **Recap/Introduction** (5-10 min): Review previous day's concepts
2. **Main Lesson** (20-30 min): Focus on song and skill building
3. **Plenary** (5-10 min): Summary and reflection

## User Stories

- Users can sign up and create an account
- Users can view their 6-week learning plan
- Users can access daily lessons structured around songs
- Users can mark lessons as complete
- Users can see bunny progress moving up the hill
- Users can unlock certificates at each level
- Users can view their overall progress percentage

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT
