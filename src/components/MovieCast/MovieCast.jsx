import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchCredits } from "../../services/api";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await searchCredits(movieId);
        setCasts(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  return (
    <div className={css.container}>
      {casts.length === 0 ? (
        <p>No cast information available.</p>
      ) : (
        <ul className={css.castList}>
          {casts.map((item, index) => {
            const imgUrl = item.profile_path
              ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
              : defaultImg;

            return (
              <li className={css.castItem} key={`${item.id}-${index}`}>
                <img src={imgUrl} alt={item.name} width="100" />
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
