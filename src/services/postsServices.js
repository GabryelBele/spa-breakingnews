import axios from "axios";

const baseUrl = "http://localhost:3000";

export function getAllPosts() {
  const response = axios.get(`${baseUrl}/news`);
  return response;
}

export async function getTopPosts() {
  const response = await axios.get(`${baseUrl}/news/top`);
  return response;
}
