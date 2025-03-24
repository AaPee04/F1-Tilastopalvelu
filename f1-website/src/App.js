import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import DriverList from './DriverChart';
import DriverProfile from './DriverProfile';
import RaceList from './RaceList';
import ChampionshipList from './ChampionshipList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Etusivu</Link>
            <Link to="/drivers">Kuljettajat</Link>
            <Link to="/races">Kisat</Link>
            <Link to="/championships">Mestaruudet</Link>
          </nav>
          <h1>F1 Tietoa</h1>
          <p>Tervetuloa F1-tietosivulle!</p>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<DriverList />} />
          <Route path="/driver/:name" element={<DriverProfile />} />
          <Route path="/races" element={<RaceList />} />
          <Route path="/championships" element={<ChampionshipList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;