const express = require('express');
const router = express.Router();
const pool = require('./database');
const jwtGenerator = require('./jwtGenerator');

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
    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});


// login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await pool.query
      ('SELECT * FROM users WHERE username = $1', [username]);
    if (user.rows.length === 0) {
       return res.status(401).json('Пользователь не найден');
    }
    let validPassword = false;
    if(password === user.rows[0].password) {
      validPassword = true;
    }
    if (!validPassword) {
      return res.status(401).json('Неверный пароль');
    }
    const token = jwtGenerator(user.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;