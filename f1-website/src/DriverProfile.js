import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DriverProfile = () => {
  const { name } = useParams();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    // Hakee kuljettajaprofiilin tiedot palvelimelta
    fetch(`http://localhost:3001/driver/${name}`)
      .then(response => response.json())
      .then(data => setDriver(data))
      .catch(error => console.error('Virhe haettaessa tietoja:', error));
  }, [name]);

  if (!driver) {
    return <div>Kuljettajaa ei löytynyt.</div>;
  }

  return (
    <div>
      <h2>{driver.name}</h2>
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
  );
};

export default DriverProfile;
