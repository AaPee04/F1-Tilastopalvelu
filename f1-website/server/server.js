const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/drivers', (req, res) => {
  const query = 'SELECT * FROM drivers';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/driver/:name', (req, res) => {
  const name = req.params.name;
  const query = 'SELECT * FROM drivers WHERE name = ?';
  db.get(query, [name], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

app.get('/races', (req, res) => {
  const query = 'SELECT * FROM races';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/championships', (req, res) => {
  const query = 'SELECT * FROM championship';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/submit-feedback', (req, res) => {
  const { palaute } = req.body;
  const query = 'INSERT INTO palaute (palaute) VALUES (?)';
  db.run(query, [palaute], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ message: 'Feedback submitted successfully!' });
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
