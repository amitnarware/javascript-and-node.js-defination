   //   WHAT IS USE EXPRESS.JSON 

  /* express.json() is a built-in middleware provided by Express.js.

It is used to parse incoming JSON requests. When you send JSON data
 in the body of a POST or PUT request, for example, express.json 
 will automatically parse that JSON data and make it available as
  req.body in your route handlers.
This middleware is essential when you need to work with JSON data
 in your Express.js application. */

 const express = require('express');
const app = express();

// Middleware to parse JSON in incoming requests
app.use(express.json());

// Route to handle POST request with JSON data
app.post('/api/data', (req, res) => {
  const jsonData = req.body; // Access the parsed JSON data here
  res.json({ message: 'Data received' });
});
