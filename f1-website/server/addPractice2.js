const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');
const fs = require('fs');

const practice2 = JSON.parse(fs.readFileSync('./server/practice2.json', 'utf8'));

db.serialize(() => {
  const stmt = db.prepare('INSERT INTO practice2 (race, location, fastest1, fastest2, fastest3, fastestLapTime) VALUES (?, ?, ?, ?, ?, ?)');
  
  practice2.forEach(session => {
    stmt.run(session.race, session.location, session.fastest1, session.fastest2, session.fastest3, session.fastestLapTime);
  });
  
  stmt.finalize();
});

db.close(() => {
  console.log('Practice 2 session results added to the database.');
});
