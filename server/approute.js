const router = require('express').Router();
const pool = require('./database');
const validation = require('./validation');

router.get('/', validation, async (req, res) => {
  try {
    const user = await pool.query
    ('SELECT username FROM users WHERE id = $1', [req.user]);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
});

module.exports = router;