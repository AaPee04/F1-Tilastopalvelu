import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChampionshipList = () => {
  const [championships, setChampionships] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/championships')
      .then(response => response.json())
      .then(data => setChampionships(data))
      .catch(error => console.error('Error fetching data:', error));
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
          {championships.map((championship, index) => (
            <tr key={index}>
              <td>{championship.position}</td>
              <td><Link to={`/driver/${championship.driverName.toLowerCase().replace(' ', '-')}`}>{championship.driverName}</Link></td>
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