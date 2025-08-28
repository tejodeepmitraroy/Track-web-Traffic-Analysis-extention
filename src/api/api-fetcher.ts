import { apiClient } from "../config/api-config"

export const getAnalysis= async(domain:string) : Promise<getAnalysis | null>  => {
    try {
       const response = await apiClient.get<getAnalysis>(
         `/get-analysis?domain=${domain}`
       );
       return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}