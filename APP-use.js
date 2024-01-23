//   WHAT IS USE OF APP.USE

/* app.use:

app.use is a method in Express.js used to add middleware functions
 to your application's request-handling pipeline.
Middleware functions are functions that can process or modify 
incoming requests or outgoing responses before they reach their
 final destination.
You can use app.use to apply middleware globally to all routes or 
to specific routes, depending on where you place it in your code.
For example, you might use app.use to apply middleware for tasks
 like logging, authentication, handling sessions, or setting up 
 CORS headers. It's a way to extend the functionality of your 
 Express.js application. */
 const express = require('express');
const app = express();

// Middleware function for logging requests
app.use((req, res, next) => {
  console.log(`Request received for ${req.url}`);
  next(); // Call next to pass the request to the next middleware in the pipeline
});

// Routes and other middleware can be defined here
