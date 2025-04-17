import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Home';
import DriverChart from './DriverChart';
import RaceList from './RaceList';
import QualifyingList from './QualifyingList';
import Practice1List from './Practice1List';
import Practice2List from './Practice2List';
import Practice3List from './Practice3List';
import ChampionshipList from './ChampionshipList';
import ConstructorList from './ConstructorList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            {/* Navigointilinkit */}
            <Link to="/">Etusivu</Link>
            <Link to="/drivers">Kuljettajat</Link>
            <div className="dropdown">
              <Link to="/races">Kisat</Link>
              <div className="dropdown-content">
                <Link to="/races">Kisat</Link>
                <Link to="/qualifying">Aika-ajot</Link>
                <Link to="/practice1">Harjoitus 1</Link>
                <Link to="/practice2">Harjoitus 2</Link>
                <Link to="/practice3">Harjoitus 3</Link>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/championships">Mestaruus</Link>
              <div className="dropdown-content">
                <Link to="/championships">Kuskit</Link>
                <Link to="/constructors">Tallit</Link>
              </div>
            </div>
          </nav>
          <h1>F1 Tietoa</h1>
          <p>Tervetuloa F1-tietosivulle!</p>
          <LocationBasedNavigation />
        </header>
        <Routes>
          {/* Reittimääritykset */}
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<DriverChart />} />
          <Route path="/races" element={<RaceList />} />
          <Route path="/qualifying" element={<QualifyingList />} />
          <Route path="/practice1" element={<Practice1List />} />
          <Route path="/practice2" element={<Practice2List />} />
          <Route path="/practice3" element={<Practice3List />} />
          <Route path="/championships" element={<ChampionshipList />} />
          <Route path="/constructors" element={<ConstructorList />} />
        </Routes>
      </div>
    </Router>
  );
}

function LocationBasedNavigation() {
  const location = useLocation();

  return (
    <>
      {(location.pathname === '/championships' || location.pathname === '/constructors') && (
        <div className="navigation-buttons">
          <Link to="/championships" className="nav-link">Kuskit</Link>
          <Link to="/constructors" className="nav-link">Tallit</Link>
        </div>
      )}
      {(location.pathname === '/races' || location.pathname === '/qualifying' || location.pathname === '/practice1' || location.pathname === '/practice2' || location.pathname === '/practice3') && (
        <div className="navigation-buttons">
          <Link to="/races" className="nav-link">Kisat</Link>
          <Link to="/qualifying" className="nav-link">Aika-ajot</Link>
          <Link to="/practice1" className="nav-link">Harjoitus 1</Link>
          <Link to="/practice2" className="nav-link">Harjoitus 2</Link>
          <Link to="/practice3" className="nav-link">Harjoitus 3</Link>
        </div>
      )}
    </>
  );
}

export default App;
