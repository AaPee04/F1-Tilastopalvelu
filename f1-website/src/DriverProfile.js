import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DriverProfile = () => {
  const { name } = useParams();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    fetch(`/driver/${name}`)
      .then(response => response.json())
      .then(data => setDriver(data));
  }, [name]);

  if (!driver) {
    return <div>Kuljettajaa ei löytynyt.</div>;
  }

  return (
    <div>
      <h2>{driver.name}</h2>
      <p>Team: {driver.team}</p>
      <p>Nationality: {driver.nationality}</p>
      <p>Bio: {driver.bio}</p>
    </div>
  );
};

export default DriverProfile;