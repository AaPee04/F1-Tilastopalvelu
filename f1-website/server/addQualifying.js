const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');
const fs = require('fs');

const qualifying = JSON.parse(fs.readFileSync('./server/qualifying.json', 'utf8'));

db.serialize(() => {
  const stmt = db.prepare('INSERT INTO qualifying (race, location, qualifyingWinner, qualifyingPlace2, qualifyingPlace3, fastestLapTime) VALUES (?, ?, ?, ?, ?, ?)');
  
  qualifying.forEach(session => {
    stmt.run(session.race, session.location, session.qualifyingWinner, session.qualifyingPlace2, session.qualifyingPlace3, session.fastestLapTime);
  });
  
  stmt.finalize();
});

db.close(() => {
  console.log('Qualifying session results added to the database.');
});
