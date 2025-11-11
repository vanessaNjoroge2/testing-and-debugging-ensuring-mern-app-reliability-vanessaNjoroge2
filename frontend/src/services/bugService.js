// frontend/src/services/bugService.js
import axios from 'axios';
const API_URL = 'http://localhost:5000/api/bugs';

export const getBugs = () => axios.get(API_URL);
export const createBug = (bug) => axios.post(API_URL, bug);
export const updateBug = (id, bug) => axios.put(`${API_URL}/${id}`, bug);
export const deleteBug = (id) => axios.delete(`${API_URL}/${id}`);
export const getBugById = (id) => axios.get(`${API_URL}/${id}`);