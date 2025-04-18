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
            <img src={`./images/drivers/${driver.image}`} alt={`${driver.name}`} />
            <div>
              <h3>
                {driver.name}
                <img src={`./images/flags/${driver.flagImage}`} alt={`${driver.nationality} flag`} />
              </h3>
              <p>Ikä: {driver.age}</p>
              <p>Kuljettajanumero: {driver.drivernumber}</p>
              <p>Tiimi: {driver.team}</p>
              <p>Kansallisuus: {driver.nationality}</p>
              <p>Mestaruudet: {driver.championships}</p>
              <p>Voitot: {driver.wins}</p>
              <p>Palkintopaikat: {driver.podiums}</p>
              <p>Kisojen määrä: {driver.races}</p>
              <p>Kokonaispisteet uran aikana: {driver.totalPoints}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverList;
