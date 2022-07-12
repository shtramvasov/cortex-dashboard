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

// get products
app.get ('/products', async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM products");
    res.json(allProducts.rows); 
  } catch (err) {
    console.error(err.message);
  }
});

// get product
app.get ('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getProduct = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
    res.json(getProduct.rows[0]);  
  } catch (err) {
    console.error(err.message);  
  }
});

// edit product
app.post ('/edit', async (req, res) => {
  try {
    const { id, name, description, price, quantity } = req.body;
    const editProduct = await pool.query
    ("UPDATE products SET name = $2, description = $3, price = $4, quantity = $5 WHERE id = $1", [id, name, description, price, quantity]);
    res.json(editProduct.rows[0]);  
  } catch (err) {
    console.error(err.message);  
  }

});

// add product
app.post ('/add', async (req, res) => {
  try {
    const { name, description, price, quantity } = req.body;
    const addProduct = await pool.query
        ('INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4)', [name, description, price, quantity]);
    res.json(addProduct.rows[0]);  
  } catch (err) {
    console.error(err.message);  
  }
});

// delete product
app.delete ('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query
    ('DELETE FROM products WHERE id = $1', [id]);
  } catch (err) {
    console.error(err.message);
  }
});

// update password
app.post ('/settings', require('./approute'), async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === 'cortex') {
      res.status(418).json('Пароль для суперадмина нельзя изменять');
    } else {
        const updatePassword = await pool.query
        ("UPDATE users SET password = $2 WHERE username = $1 RETURNING username", [username, password]);
        res.json(updatePassword.rows[0]); 
    }
  } catch (err) {
    console.error(err.message);
  }
});


app.listen(5000, () => {
  console.log('server is running, PORT 5000') 
});