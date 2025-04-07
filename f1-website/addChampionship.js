const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');
const fs = require('fs');

const championship = JSON.parse(fs.readFileSync('championship.json', 'utf8'));

db.serialize(() => {
  const stmt = db.prepare('INSERT INTO championship (position, driverName, team, seasonPoints, seasonWins) VALUES (?, ?, ?, ?, ?)');
  
  championship.forEach(championship => {
    stmt.run(championship.position, championship.driverName, championship.team, championship.seasonPoints, championship.seasonWins);
  });
  
  stmt.finalize();
});

db.close(() => {
  console.log('Standings added to the database.');
});