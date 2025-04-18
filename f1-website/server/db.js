const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');

// Luo Taulukot f1.db tietokantaan
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS drivers (name TEXT, drivernumber INTEGER, team TEXT, nationality TEXT, championships INTEGER, wins INTEGER, podiums INTEGER, races INTEGER, totalPoints INTEGER, age INTEGER, image TEXT, flagImage TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS races (race TEXT, location TEXT, winner TEXT, place2 TEXT, place3 TEXT, fastestLap TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS championship (position INTEGER, driverName TEXT, team TEXT, seasonPoints INTEGER, seasonWins INTEGER)");
  db.run("CREATE TABLE IF NOT EXISTS constructors (position INTEGER, teamName TEXT, seasonPoints INTEGER, seasonWins INTEGER)");
  db.run("CREATE TABLE IF NOT EXISTS palaute (palaute TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS practice1 (race TEXT, location TEXT, fastest1 TEXT, fastest2 TEXT, fastest3 TEXT, fastestLapTime TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS practice2 (race TEXT, location TEXT, fastest1 TEXT, fastest2 TEXT, fastest3 TEXT, fastestLapTime TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS practice3 (race TEXT, location TEXT, fastest1 TEXT, fastest2 TEXT, fastest3 TEXT, fastestLapTime TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS qualifying (race TEXT, location TEXT, qualifyingWinner TEXT, qualifyingPlace2 TEXT, qualifyingPlace3 TEXT, fastestLapTime TEXT)");
});

module.exports = db;
