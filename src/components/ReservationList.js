import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllReservations } from '../services/reservations';

function ReservationList() {
  const [resevations, setReservations] = useState([]);

  useEffect(() => {
    getAllReservations().then(setReservations);
  }, []);

  return (
    <div>
      <h1>Rezervări</h1>
      <ul>
        {resevations.map(reservation => (
          <li key={reservation.id}>
            <Link to={`/reservations/${reservation.id}`}>
              {reservation.filed.name} - {reservation.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}