import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchReviews } from "../../services/api";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await searchReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div className={css.container}>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              <strong>{review.author}</strong>: {review.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
