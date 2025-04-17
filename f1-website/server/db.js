const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');

// Luo Taulukot f1.db tietokantaan
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS drivers (name TEXT, drivernumber INTEGER, team TEXT, nationality TEXT, championships INTEGER, wins INTEGER, podiums INTEGER, races INTEGER, totalPoints INTEGER, age INTEGER, image TEXT, flagImage TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS races (race TEXT, location TEXT, winner TEXT, place2 TEXT, place3 TEXT, fastestLap TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS championship (position INTEGER, driverName TEXT, team TEXT, seasonPoints INTEGER, seasonWins INTEGER)");
  db.run("CREATE TABLE IF NOT EXISTS constructors (position INTEGER, teamName TEXT, seasonPoints INTEGER, seasonWins INTEGER)");
  db.run("CREATE TABLE IF NOT EXISTS palaute (palaute TEXT)");
});

module.exports = db;
