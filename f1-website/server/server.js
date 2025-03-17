const express = require('express');
const db = require('./db');
const app = express();

app.get('/drivers', (req, res) => {
  const query = 'SELECT * FROM drivers';
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/driver/:name', (req, res) => {
  const name = req.params.name;
  const query = 'SELECT * FROM drivers WHERE name = ?';
  db.query(query, [name], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});