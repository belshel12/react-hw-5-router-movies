import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
