const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS drivers (name TEXT, age INTEGER, polePositions INTEGER, team TEXT, nationality TEXT, wins INTEGER, podiums INTEGER, races INTEGER, totalPoints INTEGER, bio TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS races (race TEXT, location TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS championships (year INTEGER, winner TEXT)");
});

module.exports = db;