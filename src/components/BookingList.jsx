import React from "react";

function BookingList(prop) {
  return (
    <ul>
      props.bookings.map(booking, index) {
        <li key={index} value={booking}>{booking}</li>
      }
    </ul>
  );
}

export default BookingList;