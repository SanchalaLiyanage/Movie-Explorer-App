const express = require('express');
const router = express.Router();
const { signIn, register } = require('../controllers/authController');

// Sign-in route
router.post('/signin', signIn);

// Registration route
router.post('/register', register);

// Add error handling logs
router.use((err, req, res, next) => {
  console.error(`Error occurred in auth route: ${err.message}`);
  res.status(500).json({ error: 'An internal server error occurred.' });
});

module.exports = router;
