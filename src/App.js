import '../src/App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FieldList from './components/FieldList';
import FieldDetails from './components/FieldDetails';
import ReservationForm from './components/ReservationForm';
import ReservationConfirmation from './components/ReservationConfirmation';
import NotFound from './components/NotFound';

function App() {

  // Initialize state for bookings as a empty array

  const [bookings, setBookings] = useState([]);

  function addBooking(newBooking) {
    setBookings([...bookings, newBooking]);
  }

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
      </div>
      <main className='flex-grow-1'>
        <div className='container'>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/fields">
              <FieldList />
            </Route>
            <Route exact path="/fields/:id">
              <FieldDetails />
            </Route>
            <Route exact path="/fields/:id/reserve">
              <ReservationForm />
            </Route>
            <Route exact path="/confirmation">
                <ReservationConfirmation />
              </Route>
            <Route>
              <NotFound />
            </Route>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
