import React, { useState, useEffect } from 'react';

const ConstructorList = () => {
  const [constructors, setConstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/constructors') // Endpoint for constructors data
      .then(response => response.json())
      .then(data => setConstructors(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>F1 Tiimit 2025</h2>
      <table>
        <thead>
          <tr>
            <th>Sijoitus</th>
            <th>Tiimi</th>
            <th>Pisteet</th>
            <th>Voitot</th>
          </tr>
        </thead>
        <tbody>
          {constructors.map((constructor, index) => (
            <tr key={index}>
              <td>{constructor.position}</td>
              <td>{constructor.teamName}</td>
              <td>{constructor.seasonPoints}</td>
              <td>{constructor.seasonWins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConstructorList;
