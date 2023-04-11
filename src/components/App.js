import '../src/App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import FieldList from './FieldList';
import FieldDetails from './FieldDetails';
import ReservationForm from './ReservationForm';
import ReservationConfirmation from './ReservationConfirmation';
import NotFound from './NotFound';

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
          <Switch>
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
          </Switch>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
