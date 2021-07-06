const { Router } = require('express');
const router = Router();

router.get('/current-user', (req, res) => {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;
