// Importing necessary modules
const express = require('express'); // Import Express.js framework
const jwt = require('jsonwebtoken'); // Import JWT for authentication
const bodyParser = require('body-parser'); // Import body-parser for parsing JSON bodies

// Creating an Express application
const app = express();
const PORT = 3000; // Defining the port for the server to listen on

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
  const { username, password } = req.body; // Extracting username and password from request body
  const newUser = { id: users.length + 1, username, password }; // Creating a new user object
  users.push(newUser); // Adding the new user to the users array
  res.status(201).json({ message: 'User registered successfully', user: newUser }); // Sending response with status code 201 and JSON data
});

// User authentication endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body; // Extracting username and password from request body
  const user = users.find(u => u.username === username && u.password === password); // Finding user in the users array
  if (user) { // If user exists
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey); // Generating  JWT token
    res.json({ message: 'Login successful', token }); // Sending response with token
  } else { // If user doesn't exist
    res.status(401).json({ message: 'Invalid credentials' }); // Sending response with status code 401
  }
});

// Middleware for JWT authentication
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']; // Getting Authorization header
  const token = authHeader && authHeader.split(' ')[1]; // Extracting  token from header
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
  const token = req.query.token; // Getting token from query parameter
  if(token){ // If token exists
    res.json(dummyData); // Sending  dummy data as response
  }else{
    res.json({response : "Invalid"}); // Sending  response with "Invalid" if token is missing
  }
});

// Starting  server
app.listen(PORT, () => {
    console.log('Server is running on http://127.0.0.1:' + PORT); // Starting  listening on specified port
});
