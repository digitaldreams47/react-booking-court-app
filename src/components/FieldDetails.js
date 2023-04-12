import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../services/fields';
import LoadingSpinner from './LoadingSpinner';

function FieldDetails() {
  const { id } = useParams();
  const [field, setField] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getById(id).then(field => {
     setField(field);
     setLoading(loading); 
    });
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>{field.name}</h1>
      <p>{field.description}</p>
      <p>Preț pe oră: {field.price_per_hour} lei</p>
    </div>
  );

}

export default FieldDetails;