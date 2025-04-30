import css from "./index.module.css";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Navication from "./components/Navication/Navication";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));

export default function App() {
  return (
    <div className={css.pageContainer}>
      <Navication />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
