const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS drivers (name TEXT, age INTEGER, polePositions INTEGER, team TEXT, nationality TEXT, wins INTEGER, podiums INTEGER, races INTEGER, points INTEGER, bio TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS races (race TEXT, location TEXT, winner TEXT, place2 TEXT, place3 TEXT, fastestLap TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS championship (position INTEGER, driverName TEXT, team TEXT, seasonPoints INTEGER, seasonWins INTEGER)");
  db.run("CREATE TABLE IF NOT EXISTS palaute (palaute TEXT)");
});

module.exports = db;
