const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./database');

// middleware
app.use(cors());
app.use(express.json());


app.listen(5000, () => {
  console.log('server is running, PORT 5000') 
});