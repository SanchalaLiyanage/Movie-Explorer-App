const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Mock user data for demonstration purposes
const users = [
  {
    id: 1,
    username: 'testuser',
    password: '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4d6ZQWJv1o1z1z1z1z1', // bcrypt hash for 'password123'
  },
];

// Sign-in controller
exports.signIn = async (req, res) => {
  const { username, password } = req.body;

  console.log('SignIn request received:', { username, password });

  // Find user by username
  const user = users.find((u) => u.username === username);
  if (!user) {
    console.log('User not found:', username);
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Compare passwords
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    console.log('Invalid password for user:', username);
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', {
    expiresIn: '1h',
  });

  console.log('Token generated for user:', username);
  res.json({ token });
};

// User registration controller
exports.register = async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const userExists = users.find((u) => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = {
    id: users.length + 1,
    username,
    password: hashedPassword,
  };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
};
