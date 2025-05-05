// filepath: Go-Pesa-Platform-BackEnd/src/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); 
const authenticateMiddleware = require('../middlewares/authMiddleware'); // Middleware for auth
const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// **Fetch User Data Route (NEW)**
router.get('/user', authenticateMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password for security
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.status(200).json({ name: user.name, email: user.email, username: user.username });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user data' });
  }
});

module.exports = router;
