// Assuming you have a 'users' array with user data
const users = require('../data/fakeUsers'); // Update this with your actual user data

// Function to check if the user is an admin
const isAdmin = (email) => {
  const adminUser = users.find((user) => user.email === email && user.isAdmin);
  return adminUser !== undefined;
};

// Function to authenticate the user
const authenticateUser = (email, password) => {
  const authenticatedUser = users.find((user) => user.email === email && user.password === password);
  return authenticatedUser !== undefined;
};

module.exports = { isAdmin, authenticateUser };
