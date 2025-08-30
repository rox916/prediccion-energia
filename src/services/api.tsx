import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // backend FastAPI

export const predictConsumption = async (consumption: number, tarifa: number, empresa: string) => {
  const response = await axios.post(`${API_URL}/predict`, {
    consumo: consumption,
    tarifa,
    empresa,
  });
  return response.data;
};
