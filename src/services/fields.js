import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const fieldsService = {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/fields`);
    return response.data;
  },

  getById: async (id) => {
    const response = await axios.get(`${API_URL}/fields/${id}`);
    return response.data;
  },

  create: async (newField) => {
    const response = await axios.post(`${API_URL}/fields/`, newField);
    return response.data;
  },

  update: async (id, updatedField) => {
    const response = await axios.put(`${API_URL}/fields/${id}`, updatedField);
    return response.data;
  },

  delete: async (id) => {
    const response = await axiox.delete(`${API_URL}/fields/${id}`);
    return response.data;
  }
};

export default fieldsService;