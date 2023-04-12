import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const locationsService = {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/locations`);
    return response.data;
  },

  getById: async (id) => {
    const response = await axios.get(`${API_URL}/locations/${id}`);
    return response.data;
  },

  create: async (newLocation) => {
    const response = await axios.post(`${API_URL}/locations`, newLocation);
    return response.data;
  },

  updated: async (id, updatedLocation) => {
    const response = await axios.put(`${API_URL}/locations/${id}`, updatedLocation);
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`${API_URL}/locations/${id}`);
    return response.data;
  },

};

export default locationsService;