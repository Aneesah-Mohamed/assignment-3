const express = require('express');
const router = express.Router();
const usersModel = require('../models/users');

// GET all users
router.get('/', (req, res) => {
  const allUsers = usersModel.getAllUsers();
  res.json(allUsers);
});

// GET a specific user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = usersModel.getUserById(id);
  res.json(user);
});

// DELETE a user by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  usersModel.deleteUserById(id);
  res.json({ success: true, message: `User with ID ${id} has been deleted` });
});

// POST a new user
router.post('/', (req, res) => {
  const newUser = req.body; // Assuming the request body contains the new user data
  usersModel.addUser(newUser);
  res.json(newUser);
});

module.exports = router;
