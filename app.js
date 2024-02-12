// Import necessary modules
const express = require('express'); // Import Express.js framework
const jwt = require('jsonwebtoken'); // Import JWT for authentication
const bodyParser = require('body-parser'); // Import body-parser for parsing JSON bodies

// Create an Express application
const app = express();
const PORT = 3000; // Define the port for the server to listen on

// Dummy user data
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Secret key for JWT
const secretKey = 'secret';

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// User registration endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body; // Extract username and password from request body
  const newUser = { id: users.length + 1, username, password }; // Create a new user object
  users.push(newUser); // Add the new user to the users array
  res.status(201).json({ message: 'User registered successfully', user: newUser }); // Send response with status code 201 and JSON data
});

// User authentication endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body; // Extract username and password from request body
  const user = users.find(u => u.username === username && u.password === password); // Find user in the users array
  if (user) { // If user exists
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey); // Generate JWT token
    res.json({ message: 'Login successful', token }); // Send response with token
  } else { // If user doesn't exist
    res.status(401).json({ message: 'Invalid credentials' }); // Send response with status code 401
  }
});

// Middleware for JWT authentication
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']; // Get Authorization header
  const token = authHeader && authHeader.split(' ')[1]; // Extract token from header
  if (token == null) return res.status(401).json({ message: 'Unauthorized' }); // If token is missing, send unauthorized response

  jwt.verify(token, secretKey, (err, user) => { // Verify token
    if (err) return res.status(403).json({ message: 'Forbidden' }); // If token is invalid, send forbidden response
    req.user = user; // Set user data in request object
    next(); // Call next middleware
  });
}

// Dummy data
const dummyData = [
  { id: 1, title: 'Post 1', content: 'Content of post 1' },
  { id: 2, title: 'Post 2', content: 'Content of post 2' }
];

// Data endpoint
app.get('/data', (req, res) => {
  const token = req.query.token; // Get token from query parameter
  if(token){ // If token exists
    res.json(dummyData); // Send dummy data as response
  }else{
    res.json({response : "Invalid"}); // Send response with "Invalid" if token is missing
  }
});

// Start server
app.listen(PORT, () => {
    console.log('Server is running on http://127.0.0.1:' + PORT); // Start listening on specified port
});
