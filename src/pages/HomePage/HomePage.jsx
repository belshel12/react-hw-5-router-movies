import { useEffect, useState } from "react";
import { getTrending } from "../../services/getApi";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

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
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
