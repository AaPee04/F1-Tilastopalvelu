import React, { useState, useEffect } from 'react';

const RaceList = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    // Hakee kisatiedot palvelimelta
    fetch('http://localhost:3001/races')
      .then(response => response.json())
      .then(data => setRaces(data))
      .catch(error => console.error('Virhe haettaessa tietoja:', error));
  }, []);

  return (
    <div>
      <h2>F1-Kausi 2025</h2>
      <table>
        <thead>
          <tr>
            <th>Kisa</th>
            <th>Sijainti</th>
            <th>Voittaja</th>
            <th>2. Sija</th>
            <th>3. Sija</th>
            <th>Nopein kierros</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderöi kisatiedot */}
          {races.map((race, index) => (
            <tr key={index}>
              <td>{race.race}</td>
              <td>{race.location}</td>
              <td>{race.winner}</td>
              <td>{race.place2}</td>
              <td>{race.place3}</td>
              <td>{race.fastestLap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaceList;
