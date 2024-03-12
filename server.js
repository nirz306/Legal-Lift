const express = require('express');
const jsonServer = require('json-server');
const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware to parse JSON request body
server.use(express.json());

// Custom middleware for authentication
server.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user in the JSON data
  const user = router.db.get('users').find({ email, password }).value();

  if (user) {
    res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

// Use the default JSON Server middleware
server.use(middlewares);

// Mount JSON Server router
server.use('/api', router);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:3000`);
});
