import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Hakee kuljettajatiedot palvelimelta
    fetch('http://localhost:3001/drivers')
      .then(response => response.json())
      .then(data => setDrivers(data))
      .catch(error => console.error('Virhe haettaessa tietoja:', error));
  }, []);

  return (
    <div>
      <h2>Nykyiset F1-kuljettajat</h2>
      <table>
        <thead>
          <tr>
            <th>Nimi</th>
            <th>Tiimi</th>
            <th>Kansallisuus</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderöi kuljettajatiedot */}
          {drivers.map((driver, index) => (
            <tr key={index}>
              <td><Link to={`/driver/${driver.name.toLowerCase().replace(' ', '-')}`}>{driver.name}</Link></td>
              <td>{driver.team}</td>
              <td>{driver.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverList;
