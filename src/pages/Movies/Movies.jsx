import { useState } from "react";
import { getMovie } from "../../services/getApi";
import MovieList from "../../components/MovieList/MovieList";

const Movies = () => {
  const [queryValue, setQueryValue] = useState("");
  const [movies, setMovies] = useState([]);
  const handleChange = (e) => {
    setQueryValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovie(queryValue)
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err.message));

    setQueryValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={queryValue} />
        <button>Search</button>
      </form>
      <div>
        <MovieList movies={movies} />
      </div>
    </>
  );
};

export default Movies;
