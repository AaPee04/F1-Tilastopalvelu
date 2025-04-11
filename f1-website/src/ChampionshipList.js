import React, { useState, useEffect } from 'react';

const ChampionshipList = () => {
  const [championships, setChampionships] = useState([]);

  useEffect(() => {
    // Hakee mestaruustiedot palvelimelta
    fetch('http://localhost:3001/championships')
      .then(response => response.json())
      .then(data => setChampionships(data))
      .catch(error => console.error('Virhe haettaessa tietoja:', error));
  }, []);

  return (
    <div>
      <h2>F1 mestaruus 2025</h2>
      <table>
        <thead>
          <tr>
            <th>Sijoitus</th>
            <th>Kuljettaja</th>
            <th>Tiimi</th>
            <th>Pisteet</th>
            <th>Voitot</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderöi mestaruustiedot */}
          {championships.map((championship, index) => (
            <tr key={index}>
              <td>{championship.position}</td>
              <td>{championship.driverName}</td>
              <td>{championship.team}</td>
              <td>{championship.seasonPoints}</td>
              <td>{championship.seasonWins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChampionshipList;
