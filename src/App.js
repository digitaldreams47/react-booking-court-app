import './App.scss';
import { useState } from 'react';
import BookingList from '../components/BookingList';

function App() {

  // Initialize state for bookings as a empty array

  const [bookings, setBookings] = useState([]);

  function addBooking(newBooking) {
    setBookings([...bookings, newBooking]);
  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <body>
        <div>
          <BookingList bookings={bookings} />
          <BookingForm onAddBooking={addBooking} />
        </div>
      </body>
    </div>
  );
}

export default App;
