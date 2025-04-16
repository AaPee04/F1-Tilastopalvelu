import React, { useState, useEffect } from 'react';
import './DriverList.css'; // Import the CSS file for styling

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Hakee kuljettajatiedot palvelimelta
    fetch('http://localhost:3001/drivers')
      .then(response => response.json())
      .then(data => setDrivers(data))
      .catch(error => console.error('Virhe haettaessa tietoja:', error));
  }, []);

  if (drivers.length === 0) {
    return <div>Kuljettajia ei löytynyt.</div>;
  }

  return (
    <div className="driver-list">
      <h2>Nykyiset F1-kuljettajat</h2>
      <div className="driver-cards">
        {drivers.map((driver, index) => (
          <div key={index} className="driver-card">
            <h3>{driver.name}</h3>
            <p>Ikä: {driver.age}</p>
            <p>Paalupaikat: {driver.polePositions}</p>
            <p>Tiimi: {driver.team}</p>
            <p>Kansallisuus: {driver.nationality}</p>
            <p>Voitot: {driver.wins}</p>
            <p>Palkintopaikat: {driver.podiums}</p>
            <p>Kisojen määrä: {driver.races}</p>
            <p>Kokonaispisteet uran aikana: {driver.points}</p>
            <p>Bio: {driver.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverList;
