// Add to routes/api.js
const AuthenticationService = require('../services/AuthenticationService');

router.post('/login', (req, res) => {
  const result = AuthenticationService.login(req.body.email, req.body.password);
  if (result.isAuthenticated) {
    res.json(result);
  } else {
    res.status(401).json(result);
  }
});