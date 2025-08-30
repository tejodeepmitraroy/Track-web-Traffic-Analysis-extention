import axios from 'axios';
import { API_BASE_URL, API_BASE_HOST, API_BASE_KEY } from '../config/api-config';

const apiConfig = {
	baseURL: API_BASE_URL,
	headers: {
		'x-rapidapi-key': API_BASE_KEY,
		'x-rapidapi-host': API_BASE_HOST,
	},
};

export const apiClient = axios.create(apiConfig);


