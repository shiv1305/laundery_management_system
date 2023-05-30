const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');


// Home Page
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './views' });
});

// Login Page
router.get('/login', (req, res) => {
  res.sendFile('login.html', { root: './views' });
});

// Registration Page
router.get('/register', (req, res) => {
  res.sendFile('register.html', { root: './views' });
});

// User Page
router.get('/user', (req, res) => {
  res.sendFile('user.html', { root: './views' });
});

// Admin Page
router.get('/admin', (req, res) => {
  res.sendFile('admin.html', { root: './views' });
});

// Register User

// Registration route
router.post('/register', (req, res) => {
  const { name, email, password, role } = req.body;

  // Create a new user
  const newUser = new User({
    name,
    email,
    password,
    role,
  });

  // Save the user to the database
  newUser.save()
    .then(() => {
      res.redirect('/login'); // Redirect to the login page after successful registration
    })
    .catch((error) => {
      console.error('Failed to register user:', error);
      // Handle the error and send an appropriate response
      res.status(500).send('Failed to register user');
    });
});

// Login User
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      res.redirect('/login');
    } else {
      if (user.role === 'user') {
        res.redirect('/user');
      } else if (user.role === 'admin') {
        res.redirect('/admin');
      }
    }
  } catch (err) {
    console.error('Failed to login:', err);
    res.status(500).send('Internal Server Error');
  }
});




// Route to fetch all products
router.get('/products', (req, res) => {
  // Retrieve all products from the database
  Product.find()
    .then((products) => {
      res.json(products); // Send the product data as JSON response
    })
    .catch((error) => {
      console.error('Failed to fetch products:', error);
      res.status(500).send('Failed to fetch products');
    });
});


module.exports = router;
