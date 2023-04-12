import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const reservationsService = {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/reservations`);
    return response.data;
  },

  getById: async (id) => {
    const response = await axios.get(`${API_URL}/reservations/${id}`);
    return response.data;
  },

  create: async (newReservation) => {
    const response = await axios.post(`${API_URL}/reservations`, newReservation);
    return response.data;
  },

  update: async (id, updatedReservation) => {
    const response = await axios.put(`${API_URL}/reservations/${id}`, updatedReservation);
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`${API_URL}/reservations/${id}`);
    return response.data;
  }
};

export default reservationsService;