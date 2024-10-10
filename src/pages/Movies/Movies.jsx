import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import { getMovie } from "../../services/getApi";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("filter") ?? "";

  useEffect(() => {
    getMovie(query)
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err.message));
  }, [query, searchParams]);

  return (
    <>
      <SearchBar setParams={setSearchParams} />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
