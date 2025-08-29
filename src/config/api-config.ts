export const API_BASE_URL = import.meta.env.VITE_RAPID_API_URL;
export const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
export const API_HOST = import.meta.env.VITE_RAPID_API_HOST;

import axios from 'axios';

const apiConfig = {
	baseURL: API_BASE_URL,
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': API_HOST,
	},
};

export const apiClient = axios.create(apiConfig);
