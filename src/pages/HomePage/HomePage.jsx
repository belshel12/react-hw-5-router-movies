import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrending } from "../../services/getApi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
