const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://shiv54:oxaphZCCIYcuS4Hi@cluster0.yflkfnt.mongodb.net/digitallibrary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Failed to connect to MongoDB:', err);
});

// Set up the view engine and middleware
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Routes
app.use('/', require('./routes/index'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
