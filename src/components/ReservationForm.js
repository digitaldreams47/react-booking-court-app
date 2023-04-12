import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create } from '../services/reservations';

function ReservationForm({ field }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate('');

  const handleSubmit = event => {
    event.preventDefault();
    reservationsService.create({ name, email, date, field_id: field.id }).then(() => {
      navigate.push('/reservations');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Închiriere teren "{field.name}"</h2>
      <div>
        <label htmlFor="name">Nume: </label>
        <input type="text" id="name" value={name} onChange={event => setName(event.target.value).required} />
      </div>
      <div>
        <label htmlFor="name">Email: </label>
        <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value).required} />
      </div>
      <div>
        <label htmlFor="name">Dată: </label>
        <input type="date" id="date" value={date} onChange={event => setDate(event.target.value).required} />
      </div>
      <button type="submit">Închiriază</button>
    </form>
  );
}

export default ReservationForm;