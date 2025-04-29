import { useEffect, useState } from "react";
import { searchTrendingMovies } from "../../services/api";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await searchTrendingMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={css.home}>
      <h1 className={css.title}>Trending today</h1>
      <MovieList data={movies} />
    </div>
  );
}
