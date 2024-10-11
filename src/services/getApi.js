import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "02950a717996af9fdef4339cc0050bf4";

export const getTrending = async () => {
  const response = await axios.get(
    `${URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return response.data;
};

export const getDetails = async (id) => {
  const response = await axios.get(`${URL}/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovie = async (title) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${API_KEY}&include_adult=false&language=en-US`
  );
  return response.data;
};

export const getReview = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};

export const getCast = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};
