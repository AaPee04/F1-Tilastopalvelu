const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./f1.db');
const fs = require('fs');

    const constructor = JSON.parse(fs.readFileSync('./constructors.json', 'utf8'));

    db.serialize(() => {
        const stmt = db.prepare('INSERT INTO constructors (position, teamName, seasonPoints, seasonWins) VALUES (?, ?, ?, ?)');
        
        constructors.forEach(constructor => {
            stmt.run(constructor.position, constructor.team, constructor.points, constructor.seasonWins);
        });
        
        stmt.finalize();
    });

    db.close(() => {
        console.log('Standings added to the database.');
    });
