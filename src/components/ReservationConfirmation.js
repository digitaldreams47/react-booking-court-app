import React from 'react';

function ReservationConfirmation({ reservation }) {
  return (
    <div>
      <h1>Rezervarea a fost confirmată!</h1>
      <p>Detalii rezervare:</p>
      <ul>
        <li>Teren: {reservation.field.name}</li>
        <li>Data: {reservation.date}</li>
        <li>Ora începerii: {reservation.start_time}</li>
        <li>Ora încheierii: {reservation.end_time}</li>
        <li>Preț per oră: {reservation.field.price_per_hour} lei</li>
        <li>Sumă totală: {reservation.total_price} lei</li>
      </ul>
    </div>
  );
}

export default ReservationConfirmation;