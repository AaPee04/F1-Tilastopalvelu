const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Hakee kaikki kuljettajat tietokannasta
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

// Hakee tietyn kuljettajan tiedot nimen perusteella
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

// Hakee kaikki kisat tietokannasta
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

// Hakee kaikki mestaruudet tietokannasta
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

// Hakee kaikki tallit tietokannasta
app.get('/constructors', (req, res) => {
  const query = 'SELECT * FROM constructors';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Hakee ensimmäisen harjoitussession tulokset tietokannasta
app.get('/practice1', (req, res) => {
  const query = 'SELECT * FROM practice1';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Hakee toisen harjoitussession tulokset tietokannasta
app.get('/practice2', (req, res) => {
  const query = 'SELECT * FROM practice2';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Hakee kolmannen harjoitussession tulokset tietokannasta
app.get('/practice3', (req, res) => {
  const query = 'SELECT * FROM practice3';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Hakee aika-ajojen tulokset tietokannasta
app.get('/qualifying', (req, res) => {
  const query = 'SELECT * FROM qualifying';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Käsittelee palautteen lähettämisen
app.post('/submit-feedback', (req, res) => {
  const { palaute } = req.body;
  const query = 'INSERT INTO palaute (palaute) VALUES (?)';
  db.run(query, [palaute], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ message: 'Palaute lähetetty onnistuneesti!' });
  });
});

// Käynnistää palvelimen portissa 3001
app.listen(3001, () => {
  console.log('Palvelin käynnissä portissa 3001');
});
