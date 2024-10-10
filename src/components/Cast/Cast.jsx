import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/getApi";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then((data) => setCast(data.cast))
      .catch((err) => console.log(err));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ name, profile_path, credit_id, character }) => (
          <li key={credit_id}>
            <img
              alt={name}
              src={"https://image.tmdb.org/t/p/w500" + profile_path}
            />
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
