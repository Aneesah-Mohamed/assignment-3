const User = require('../models/User');

class AuthenticationService {
  static login(email, password) {
    // This should be replaced with actual authentication logic
    const user = User.getAllUsers().find(user => user.email === email);
    return user && user.isAdmin
      ? { isAuthenticated: true }
      : { isAuthenticated: false };
  }
}

module.exports = AuthenticationService;