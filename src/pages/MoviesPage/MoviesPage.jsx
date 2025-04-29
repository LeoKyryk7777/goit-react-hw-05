import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { Field, Form, Formik } from "formik";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/api";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") || "";

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  const handleSubmit = (values, { resetForm }) => {
    if (!values.query.trim()) {
      setSearchParams({});
    } else {
      setSearchParams({ query: values.query.trim() });
    }
    resetForm();
  };

  return (
    <section className={css.card}>
      <Formik onSubmit={handleSubmit} initialValues={{ query: query }}>
        <Form>
          <Field name="query" placeholder="Enter movie name..." />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      <MovieList data={movies} />
    </section>
  );
}
