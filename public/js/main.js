// Login Form
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  // Send AJAX request to login endpoint
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Login failed');
      }
    })
    .then((data) => {
      if (data.role === 'user') {
        window.location.href = '/user';
      } else if (data.role === 'admin') {
        window.location.href = '/admin';
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      // Display error message to the user
    });
});

// Registration Form
const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = registerForm.elements.name.value;
  const email = registerForm.elements.email.value;
  const password = registerForm.elements.password.value;
  const role = registerForm.elements.role.value;

  // Send AJAX request to register endpoint
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, role }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/login';
      } else {
        throw new Error('Registration failed');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      // Display error message to the user
    });
});

