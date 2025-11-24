import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
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

        <Routes>
          <Route path="/" element={
            <div className="container mt-4">
              <div className="welcome-section">
                <h1>🏋️ Welcome to OctoFit Tracker</h1>
                <p className="lead">Track your fitness journey and compete with your team!</p>
                <div className="row mt-5 text-start">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body text-center">
                        <h3>👥</h3>
                        <h5 className="card-title">User Profiles</h5>
                        <p className="card-text">Manage your personal fitness information and track your progress.</p>
                        <Link to="/users" className="btn btn-primary">View Users</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body text-center">
                        <h3>🏃</h3>
                        <h5 className="card-title">Activities</h5>
                        <p className="card-text">Log your workouts and monitor your calorie burn.</p>
                        <Link to="/activities" className="btn btn-primary">View Activities</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body text-center">
                        <h3>🏆</h3>
                        <h5 className="card-title">Leaderboard</h5>
                        <p className="card-text">Compete with others and climb the ranks.</p>
                        <Link to="/leaderboard" className="btn btn-primary">View Leaderboard</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/users" element={<Users />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
