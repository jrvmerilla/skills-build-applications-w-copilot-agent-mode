

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

function App() {


  return (
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Octofit Logo" />
        <h1 className="ms-2">Octofit Tracker</h1>
      </header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<div className="text-center"><h1>Welcome to Octofit Tracker!</h1></div>} />
          <Route path="/profile" element={<div>Profile</div>} />
          <Route path="/activities" element={<div>Activities</div>} />
          <Route path="/teams" element={<div>Teams</div>} />
          <Route path="/leaderboard" element={<div>Leaderboard</div>} />
          <Route path="/workouts" element={<div>Workouts</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
