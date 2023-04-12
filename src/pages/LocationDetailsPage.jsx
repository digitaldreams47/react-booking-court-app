import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LocationDetailPage = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(`api/location/${id}`);
        setLocation(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchLocation();
  }, [id]);


  if(!location) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{location.name}</h1>
      <p>{location.description}</p>
      <p>Adresă: {location.address}</p>
      <p>Telefon: {location.phone}</p>
      <p>Email: {location.email}</p>
    </div>
  );
};

export default LocationDetailPage;