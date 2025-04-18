const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');
const fs = require('fs');

const races = JSON.parse(fs.readFileSync('./server/races.json', 'utf8'));

db.serialize(() => {
  const stmt = db.prepare('INSERT INTO races (race, location, winner, place2, place3, fastestLap) VALUES (?, ?, ?, ?, ?, ?)');
  
  races.forEach(race => {
    stmt.run(race.race, race.location, race.winner, race.place2, race.place3, race.fastestLap);
  });
  
  stmt.finalize();
});

db.close(() => {
  console.log('Races added to the database.');
});