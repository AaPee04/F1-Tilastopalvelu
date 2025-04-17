import React, { useState, useEffect } from 'react';

const Practice2List = () => {
  const [practice2Results, setPractice2Results] = useState([]);

  useEffect(() => {
    // Hakee toisen harjoitussession tulokset palvelimelta
    fetch('http://localhost:3001/practice2')
      .then(response => response.json())
      .then(data => setPractice2Results(data))
      .catch(error => console.error('Virhe haettaessa tietoja:', error));
  }, []);

  return (
    <div>
      <h2>F1-Kausi 2025 - Harjoitus 2. session tulokset</h2>
      <table>
        <thead>
          <tr>
            <th>Kisa</th>
            <th>Sijainti</th>
            <th>1. Nopein</th>
            <th>2. Nopein</th>
            <th>3. Nopein</th>
            <th>Nopein kierrosaika</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderöi toisen harjoitussession tulokset */}
          {practice2Results.map((result, index) => (
            <tr key={index}>
              <td>{result.race}</td>
              <td>{result.location}</td>
              <td>{result.fastest1}</td>
              <td>{result.fastest2}</td>
              <td>{result.fastest3}</td>
              <td>{result.fastestLapTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Practice2List;
