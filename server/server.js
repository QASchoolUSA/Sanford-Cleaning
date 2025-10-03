const express = require('express');
const cors = require('cors');
require('dotenv').config();

const stripeRoutes = require('./routes/stripe');
const emailRoutes = require('./routes/emails');
const geocodingRoutes = require('./routes/geocoding');

const app = express();

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL || 'https://sanforcleaning.com' : 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Stripe webhook needs to be before express.json()
app.use('/api/stripe', stripeRoutes);

app.use(express.json());

app.use('/api/emails', emailRoutes);
app.use('/api/geocoding', geocodingRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}
