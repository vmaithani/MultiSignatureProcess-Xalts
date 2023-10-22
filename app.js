// 1. Import necessary libraries and initialize the server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 3. Define API routes
app.use(bodyParser.json());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', `*`);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// User routes for signup, login, and Metamask integration
const userRoutes = require('./routes/userRoutes');

// Process routes for creating and managing multi-signature processes
const processRoutes = require('./routes/processRoutes');

app.use('/user', userRoutes);
app.use('/process', processRoutes);

// 4. Set up email notifications

// 5. Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
