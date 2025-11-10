const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (optional for CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Use our router
app.use('/', indexRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
