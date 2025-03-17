import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch('/drivers')
      .then(response => response.json())
      .then(data => setDrivers(data));
  }, []);

  return (
    <div>
      <h2>Nykyiset F1-kuljettajat</h2>
      <ul>
        {drivers.map((driver, index) => (
          <li key={index}>
            <Link to={`/driver/${driver.name}`}>{driver.name}</Link> - {driver.team} ({driver.nationality})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;