import { useEffect, useState } from "react";
import { searchMovies } from "../../services/api";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await searchMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={css.home}>
      <MovieList data={movies} />
    </div>
  );
}
