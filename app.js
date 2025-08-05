// configures expres app
const express = require('express');
const app = express();
const exampleRoutes = require('./routes/exampleRoutes');

// middleware To parse JSON
app.use(express.json());

// Routes
app.use('/api/example', exampleRoutes); // Sample route path

module.exports = app;
