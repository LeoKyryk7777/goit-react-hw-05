import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { searchMoviesDetails } from "../../services/api";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await searchMoviesDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  if (!movie) {
    return <p>Loading...</p>;
  }
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultImg;

  return (
    <div className={css.home}>
      <Link to={goBackRef.current}>
        <button>
          <FaArrowLeftLong />
          Go back
        </button>
      </Link>
      <img src={imageUrl} alt={movie.title} />
      <h1>{movie.title}</h1>
      <h2 className={css.subheading}>Overview</h2>
      <p>{movie.overview}</p>
      <nav className={css.additionalInfo}>
        <h3 className={css.subheading}>Aditional information</h3>
        <ul className={css.linkList}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
