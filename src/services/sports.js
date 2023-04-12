import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const sportsService = {
  getAll: async () => {
    const response = await axios.get(`{API_URL}/sports`);
    return response.data;
  },

  getById: async (id) => {
    const response = await axios.get(`{API_URL}/sports/${id}`);
    return response.data;
  },

  create: async (newSport) => {
    const response = await axios.post(`{API_URL}/sports`, newSport);
    return response.data;
  },

  update: async (id, updatedSport) => {
    const response = await axios.put(`{API_URL}/sports/${id}`, updatedSport);
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`{API_URL}/sports/${id}`);
    return response.data;
  },

};

export default sportsService;