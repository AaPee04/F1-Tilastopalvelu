const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');
const fs = require('fs');

// Lue kuljettajien tiedot JSON-tiedostosta
const drivers = JSON.parse(fs.readFileSync('drivers.json', 'utf8'));

db.serialize(() => {
  const stmt = db.prepare('INSERT INTO drivers (name, age, polePositions, team, nationality, wins, podiums, races, points, bio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
  
  drivers.forEach(driver => {
    stmt.run(driver.name, driver.age, driver.polePositions, driver.team, driver.nationality, driver.wins, driver.podiums, driver.races, driver.points, driver.bio);
  });
  
  stmt.finalize();
});

db.close(() => {
  console.log('Drivers added to the database.');
});