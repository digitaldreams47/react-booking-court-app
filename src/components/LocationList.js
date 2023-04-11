import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllLocations } from '../services/locations';

function LocationList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getAllLocations().then(setLocations);
  }, []);

  return (
    <div>
      <h1>Locații</h1>
      <ul>
        {locations.map(location => (
          <li key={location.id}>
            <Link to={`/locations/${location.id}`}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocationList;