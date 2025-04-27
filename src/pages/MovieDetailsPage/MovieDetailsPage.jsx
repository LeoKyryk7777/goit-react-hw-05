import { Link, Outlet, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { searchMoviesDetails } from "../../services/api";

export default function MovieDetailsPage() {
  const { userId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await searchMoviesDetails(userId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [userId]);
  if (!movie) {
    return <p>Loading...</p>; // поки чекаємо відповідь
  }
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className={css.home}>
      <img src={imageUrl} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
}
