import React, { useState, useEffect } from 'react';

const QualifyingList = () => {
  const [qualifyingResults, setQualifyingResults] = useState([]);

  useEffect(() => {
    // Hakee aika-ajojen tulokset palvelimelta
    fetch('http://localhost:3001/qualifying')
      .then(response => response.json())
      .then(data => setQualifyingResults(data))
      .catch(error => console.error('Virhe haettaessa tietoja:', error));
  }, []);

  return (
    <div>
      <h2>F1-Kausi 2025 - Aika-ajojen tulokset</h2>
      <table>
        <thead>
          <tr>
            <th>Kisa</th>
            <th>Sijainti</th>
            <th>Aika-ajojen voittaja</th>
            <th>Aika-ajojen 2. sija</th>
            <th>Aika-ajojen 3. sija</th>
            <th>Nopein kierrosaika</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderöi aika-ajojen tulokset */}
          {qualifyingResults.map((result, index) => (
            <tr key={index}>
              <td>{result.race}</td>
              <td>{result.location}</td>
              <td>{result.qualifyingWinner}</td>
              <td>{result.qualifyingPlace2}</td>
              <td>{result.qualifyingPlace3}</td>
              <td>{result.fastestLapTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QualifyingList;
