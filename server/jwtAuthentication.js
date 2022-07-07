const express = require('express');
const router = express.Router();
const pool = require('./database');

// register
router.post('/registration', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await pool.query
      ('SELECT * FROM users WHERE username = $1', [username]);
    if(user.rows.length !== 0) {
      return res.status(401).json('Такой пользователь уже существует');
    }
    const newUser = await pool.query
      ('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
      res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;