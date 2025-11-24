import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseUrl = process.env.REACT_APP_CODESPACE_NAME 
      ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
      : 'http://localhost:8000';
    const apiUrl = `${baseUrl}/leaderboard/`;
    console.log('Leaderboard API endpoint:', apiUrl);

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Leaderboard fetched data:', data);
        // Handle both paginated (.results) and plain array responses
        const leaderboardData = data.results || data;
        setLeaderboard(leaderboardData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching leaderboard:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const getRankBadgeClass = (rank) => {
    if (rank === 1) return 'badge-gold';
    if (rank === 2) return 'badge-silver';
    if (rank === 3) return 'badge-bronze';
    return 'badge-default';
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="page-header">🏆 Leaderboard</h1>
      <div className="mb-3">
        <p className="text-muted">Compete with your teammates and climb the ranks!</p>
      </div>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Team</th>
              <th>Total Points</th>
              <th>Total Calories</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={entry.id || index}>
                <td>
                  <span className={`badge badge-rank ${getRankBadgeClass(index + 1)}`}>
                    {index + 1}
                  </span>
                </td>
                <td><strong>{entry.user}</strong></td>
                <td>{entry.team || <span className="text-muted">No Team</span>}</td>
                <td><span className="badge bg-primary">{entry.total_points} pts</span></td>
                <td><span className="badge bg-success">{entry.total_calories} cal</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
