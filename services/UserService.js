const User = require('../models/User');

class UserService {
  static getAllUsers() {
    // Add business logic if needed
    return User.getAllUsers();
  }

  static getUserById(id) {
    // Add business logic if needed
    return User.getUserById(id);
  }

  static createUser(userData) {
    // Add business logic if needed
    return User.createUser(userData);
  }

  static deleteUser(id) {
    // Add business logic if needed
    return User.deleteUser(id);
  }
}

module.exports = UserService;