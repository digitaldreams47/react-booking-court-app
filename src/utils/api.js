const API_BASE_URL = 'http://localhost:3000/api';

async function fetchAPI(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, options);
  
  if (!response.ok) {
    throw new Error('API request failed with status ${response.status}');
  }

  const data = await response.json();

  return data;
}

export async function fetchLocations() {
  const locations = await fetchAPI('locations');
  return locations;
}

export async function fetchLocation(id) {
  const location = await fetchAPI(`locations/${id}`);
  return location;
}

export async function fetchSports() {
  const sports = await fetchAPI('sports');
  return sports;
}

export async function fetchSport(id) {
  const sport = await fetchAPI(`sports/${id}`);
  return sport;
}

export async function fetchFields() {
  const fields = await fetchAPI('fields');
  return fields;
}

export async function fetchField(id) {
  const field = await fetchAPI(`fields/${id}`);
  return field;
}

export async function createReservation(reservation) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservation),
  };

  const reservationData = await fetchAPI('reservations', options);
  return reservationData;
}