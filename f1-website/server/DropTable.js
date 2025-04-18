const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS drivers");
});

db.close(() => {
  console.log('old table deleted.');
});
