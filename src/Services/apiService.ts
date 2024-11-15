import { Email } from "@/types/email";
import axios from "axios";

// Define your base URL (you can also use environment variables for this)
const BASE_URL = "https://flipkart-email-mock.vercel.app";

// Create an axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
});

export const getAllEmail = async (): Promise<{
  list: Email[];
  total: number;
}> => {
  const data = await apiClient.get("/");
  return data.data;
};

export const getEmailBody = async (id: string): Promise<string> => {
  const data = await apiClient.get(`/api/?id=${id}`);
  return data.data.body;
};
