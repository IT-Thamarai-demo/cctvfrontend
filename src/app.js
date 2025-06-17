// src/api/index.js or similar
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL 
});

export const fetchQuotations = () => API.get('/quotations');
export const createQuotation = (data) => API.post('/quotations', data);
export const updateQuotation = (id, data) => API.put(`/quotations/${id}`, data);
export const deleteQuotation = (id) => API.delete(`/quotations/${id}`);
