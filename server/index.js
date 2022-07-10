const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./database');

// middleware
app.use(cors());
app.use(express.json());

// login and register
app.use('', require('./jwtAuthentication'));

// app route
app.use('/', require('./approute'));

// get orders
app.get ('/orders', async (req, res) => {
  try {
    const allOrders = await pool.query("SELECT * FROM orders");
    res.json(allOrders.rows); 
  } catch (err) {
    console.error(err.message);
  }
});

// update password
app.post ('/settings', require('./approute'), async (req, res) => {
  try {
    const { username, password } = req.body;
    const updatePassword = await pool.query
    ("UPDATE users SET password = $2 WHERE username = $1 RETURNING username", [username, password]);
    res.json(updatePassword.rows[0]); 
  } catch (err) {
    console.error(err.message);
  }
});


app.listen(5000, () => {
  console.log('server is running, PORT 5000') 
});