import axios from "axios";

export const searchTrendingMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjdjNDRhNGU0MTJjYzhhYWVjMzVhZWM4MWNiY2I3NyIsIm5iZiI6MTc0NTY3MDU0Ny4wNTQwMDAxLCJzdWIiOiI2ODBjZDE5MzViMmViZDViOTUzNzhlNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rdhYKI418AtPUR-FtSZdDJoe6JJEfV27UeucxlgRMm4`,
      },
    }
  );
  return response.data.results;
};

export const searchMoviesDetails = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjdjNDRhNGU0MTJjYzhhYWVjMzVhZWM4MWNiY2I3NyIsIm5iZiI6MTc0NTY3MDU0Ny4wNTQwMDAxLCJzdWIiOiI2ODBjZDE5MzViMmViZDViOTUzNzhlNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rdhYKI418AtPUR-FtSZdDJoe6JJEfV27UeucxlgRMm4`,
      },
    }
  );
  return response.data;
};

export const searchCredits = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjdjNDRhNGU0MTJjYzhhYWVjMzVhZWM4MWNiY2I3NyIsIm5iZiI6MTc0NTY3MDU0Ny4wNTQwMDAxLCJzdWIiOiI2ODBjZDE5MzViMmViZDViOTUzNzhlNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rdhYKI418AtPUR-FtSZdDJoe6JJEfV27UeucxlgRMm4`,
      },
    }
  );
  return response.data;
};

export const searchReviews = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjdjNDRhNGU0MTJjYzhhYWVjMzVhZWM4MWNiY2I3NyIsIm5iZiI6MTc0NTY3MDU0Ny4wNTQwMDAxLCJzdWIiOiI2ODBjZDE5MzViMmViZDViOTUzNzhlNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rdhYKI418AtPUR-FtSZdDJoe6JJEfV27UeucxlgRMm4`,
      },
    }
  );
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjdjNDRhNGU0MTJjYzhhYWVjMzVhZWM4MWNiY2I3NyIsIm5iZiI6MTc0NTY3MDU0Ny4wNTQwMDAxLCJzdWIiOiI2ODBjZDE5MzViMmViZDViOTUzNzhlNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rdhYKI418AtPUR-FtSZdDJoe6JJEfV27UeucxlgRMm4`,
      },
    }
  );
  return response.data.results;
};
