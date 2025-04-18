const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');
const fs = require('fs');

// Lue kuljettajien tiedot JSON-tiedostosta
const drivers = JSON.parse(fs.readFileSync('./server/drivers.json', 'utf8'));

db.serialize(() => {
  const stmt = db.prepare('INSERT INTO drivers (name, drivernumber, team, nationality, championships, wins, podiums, races, totalPoints, age, image, flagImage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
  
  drivers.forEach(driver => {
    stmt.run(driver.name, driver.drivernumber, driver.team, driver.nationality, driver.championships, driver.wins, driver.podiums, driver.races, driver.totalPoints, driver.age, driver.image, driver.flagImage);
  });
  
  stmt.finalize();
});

db.close(() => {
  console.log('Drivers added to the database.');
});
