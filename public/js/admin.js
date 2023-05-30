// Logout Button
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', () => {
  // Perform logout action
  // Redirect the user to the login page or perform any other desired action
});

// Update Name Form
const updateNameForm = document.getElementById('updateNameForm');
updateNameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newName = updateNameForm.name.value;
  // Perform update name action
  // Send a request to the server to update the admin's name
});

// Update Password Form
const updatePasswordForm = document.getElementById('updatePasswordForm');
updatePasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const currentPassword = updatePasswordForm.currentPassword.value;
  const newPassword = updatePasswordForm.newPassword.value;
  const confirmNewPassword = updatePasswordForm.confirmNewPassword.value;
  // Perform update password action
  // Send a request to the server to update the admin's password
});

// Add Product Form
const addProductForm = document.getElementById('addProductForm');
addProductForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const productName = addProductForm.productName.value;
  const productPrice = addProductForm.productPrice.value;
  // Perform add product action
  // Send a request to the server to add a new product
});
