import React, { useState, useEffect } from 'react';

const ChampionshipList = () => {
  const [championships, setChampionships] = useState([]);

  useEffect(() => {
    fetch('/championships')
      .then(response => response.json())
      .then(data => setChampionships(data));
  }, []);

  return (
    <div>
      <h2>F1-mestaruudet</h2>
      <ul>
        {championships.map((championship, index) => (
          <li key={index}>
            <strong>{championship.year}</strong> - {championship.driver} ({championship.team})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChampionshipList;