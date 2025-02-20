import { API_KEY, BASE_URL } from '../config/apiConfig';

export const getMediaDetails = async (id, type = 'movie') => {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching media details:', error);
    throw error;
  }
};

export const fetchMovies = async (type = 'popular', page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchTVShows = async (type = 'popular', page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/tv/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    throw error;
  }
};

export const searchMedia = async (query, type = 'multi', page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/${type}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching media:', error);
    throw error;
  }
};