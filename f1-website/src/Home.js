import React, { useState } from 'react';
import './App.css'; // Varmista, että CSS-tiedosto on tuotu

const Home = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h2>Etusivu</h2>
      <p>Tervetuloa F1-tietosivulle! Täältä löydät tietoa F1-kuljettajista, kisoista ja mestaruuksista.</p>
      <div>
        <img src="/F1logo.jpg" alt="F1 Logo" style={{ width: '400px', height: 'auto' }} />
        <h3>Kisa kalenteri</h3>
        <img src="/F1RaceCalendar.jpg" alt="F1 Race Calendar" style={{ width: '400px', height: 'auto' }} />
      </div>
      <div>
        <h3>Linkit</h3>
        <ul className="link-list">
          <li><a href="https://www.formula1.com/" target="_blank" rel="noopener noreferrer">F1 viralliset sivut</a></li>
          <li><a href="https://fi.wikipedia.org/wiki/Formula_1" target="_blank" rel="noopener noreferrer">F1 Wikipedia</a></li>
        </ul>
      </div>
      <div>
        <h3>Palaute</h3>
        {submitted ? (
          <p>Kiitos palautteestasi!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Kirjoita palautteesi tähän"
              rows="4"
              cols="50"
              required
            />
            <br />
            <button type="submit">Lähetä palaute</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;