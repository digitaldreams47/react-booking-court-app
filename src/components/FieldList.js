import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllFields } from '../services/fields';

function FieldList() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    getAllFields().then(setFields);
  }, []);

  return (
    <div>
      <h1>Terenuri</h1>
      <ul>
        {fields.map(filed => (
          <li key={filed.id}>
            <Link to={`/fields/${filed.id}`}>{fields.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FieldList;