

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import { useState } from 'react';

function App() {


  return (
    function App() {
      const [showModal, setShowModal] = useState(false);
      const handleShow = () => setShowModal(true);
      const handleClose = () => setShowModal(false);

      // Sample data for table
      const sampleData = [
        { user: 'student1@example.com', activity: 'Running', distance: 5 },
        { user: 'student2@example.com', activity: 'Walking', distance: 2 },
      ];

      return (
        <Router>
          <header className="App-header d-flex align-items-center">
            <img src={logo} className="App-logo" alt="Octofit Logo" />
            <h1 className="ms-2 display-4">Octofit Tracker</h1>
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
              <Route path="/" element={
                <div className="text-center">
                  <h1 className="display-5 mb-4">Welcome to Octofit Tracker!</h1>
                  <div className="card mx-auto mb-4" style={{maxWidth: '500px'}}>
                    <div className="card-header">Sample Card</div>
                    <div className="card-body">
                      <h5 className="card-title">Fitness Motivation</h5>
                      <p className="card-text">Track your activities and compete with friends!</p>
                      <button className="btn btn-primary" onClick={handleShow}>Show Modal</button>
                    </div>
                  </div>
                  <table className="table table-striped table-bordered mx-auto" style={{maxWidth: '600px'}}>
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Activity</th>
                        <th>Distance (km)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.user}</td>
                          <td>{row.activity}</td>
                          <td>{row.distance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <form className="mt-4 mx-auto" style={{maxWidth: '400px'}}>
                    <div className="mb-3">
                      <label htmlFor="activity" className="form-label">Activity</label>
                      <input type="text" className="form-control" id="activity" placeholder="Enter activity" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="distance" className="form-label">Distance (km)</label>
                      <input type="number" className="form-control" id="distance" placeholder="Enter distance" />
                    </div>
                    <button type="submit" className="btn btn-success">Add Activity</button>
                  </form>
                  {/* Modal */}
                  {showModal && (
                    <div className="modal show d-block" tabIndex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Motivation</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                          </div>
                          <div className="modal-body">
                            <p>Keep pushing your limits!</p>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              } />
              <Route path="/profile" element={<h2 className="display-6">Profile</h2>} />
              <Route path="/activities" element={<h2 className="display-6">Activities</h2>} />
              <Route path="/teams" element={<h2 className="display-6">Teams</h2>} />
              <Route path="/leaderboard" element={<h2 className="display-6">Leaderboard</h2>} />
              <Route path="/workouts" element={<h2 className="display-6">Workouts</h2>} />
            </Routes>
          </div>
        </Router>
      );
    
