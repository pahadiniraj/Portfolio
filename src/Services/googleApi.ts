import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-backend-eight-sooty.vercel.app/api/auth",
});

export const googleAuth = (code: any) => api.get(`/google?code=${code}`);
