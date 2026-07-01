const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crystal-guitar')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./server/routes/authRoutes'));
app.use('/api/users', require('./server/routes/userRoutes'));
app.use('/api/lessons', require('./server/routes/lessonRoutes'));
app.use('/api/progress', require('./server/routes/progressRoutes'));
app.use('/api/certificates', require('./server/routes/certificateRoutes'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Crystal Guitar App is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
