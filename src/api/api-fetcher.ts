import { apiClient } from '../services/api';

export const getAnalysis = async (
	domain: string
): Promise<GetAnalysis | null> => {
	try {
		const response = await apiClient.get<GetAnalysis>(
			`/get-analysis?domain=${domain}`
		);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
