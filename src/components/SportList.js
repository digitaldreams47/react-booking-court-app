import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllSports } from '../services/sports';

function SportList() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    getAllSports().then(setSports);
  }, []);

  return (
    <div>
      <h1>Sporturi</h1>
      <ul>
        {sports.map(sport => (
          <li key={sport.id}>
            <Link to={`/sports/${sport.id}`}>{sport.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SportList;