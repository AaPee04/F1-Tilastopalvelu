import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Home';
import DriverChart from './DriverChart';
import RaceList from './RaceList';
import ChampionshipList from './ChampionshipList';
import ConstructorList from './ConstructorList';

function App() {
  const location = useLocation();

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            {/* Navigointilinkit */}
            <Link to="/">Etusivu</Link>
            <Link to="/drivers">Kuljettajat</Link>
            <Link to="/races">Kisat</Link>
            <div className="dropdown">
              <Link to="/championships">Mestaruudet</Link>
              <div className="dropdown-content">
                <Link to="/championships">Championships</Link>
                <Link to="/constructors">Constructors</Link>
              </div>
            </div>
          </nav>
          <h1>F1 Tietoa</h1>
          <p>Tervetuloa F1-tietosivulle!</p>
          {(location.pathname === '/championships' || location.pathname === '/constructors') && (
            <div className="navigation-buttons">
              <Link to="/championships" className="nav-link">Kuskit</Link>
              <Link to="/constructors" className="nav-link">Tallit</Link>
            </div>
          )}
        </header>
        <Routes>
          {/* Reittimääritykset */}
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<DriverChart />} />
          <Route path="/races" element={<RaceList />} />
          <Route path="/championships" element={<ChampionshipList />} />
          <Route path="/constructors" element={<ConstructorList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
