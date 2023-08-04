import axios from "axios";

const baseURL = "http://localhost:3000";

export function getAllPosts() {
  const response = axios.get(`${baseURL}/news`); //async
  return response;
}

export function getTopPost() {
  const response = axios.get(`${baseURL}/news/top`); //async
  return response;
}


export function searchNews(title) {
  const response = axios.get(`${baseURL}/news/search?title=${title}`); //async
  return response;
}