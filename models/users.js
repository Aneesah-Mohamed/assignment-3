// Placeholder for users data
let users = require('../data/fakeUsers'); // Update this with your actual user data

// Function to get all users
const getAllUsers = () => {
  return users;
};

// Function to get a user by ID
const getUserById = (id) => {
  return users.find((user) => user.id === id);
};

// Function to delete a user by ID
const deleteUserById = (id) => {
  users = users.filter((user) => user.id !== id);
};

// Function to add a new user
const addUser = (user) => {
  users.push(user);
};

module.exports = { getAllUsers, getUserById, deleteUserById, addUser };
