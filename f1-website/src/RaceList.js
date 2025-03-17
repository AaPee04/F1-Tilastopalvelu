import React, { useState, useEffect } from 'react';

const RaceList = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch('/races')
      .then(response => response.json())
      .then(data => setRaces(data));
  }, []);

  return (
    <div>
      <h2>Nykyiset F1-kisat</h2>
      <ul>
        {races.map((race, index) => (
          <li key={index}>
            <strong>{race.name}</strong> - {race.date} ({race.location})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RaceList;