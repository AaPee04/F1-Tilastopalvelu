const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');

db.serialize(() => {
  db.run("ALTER TABLE races ADD COLUMN fastestLap TEXT");
});

db.close(() => {
  console.log('Column added to the races table.');
});
