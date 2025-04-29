import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ data }) {
  const location = useLocation();
  return (
    <nav>
      <ul className={css.list}>
        {data.map((movie) => (
          <li className={css.item} key={movie.id}>
            <Link
              className={css.link}
              state={location}
              to={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
