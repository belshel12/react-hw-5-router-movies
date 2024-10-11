import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getDetails } from "../../services/getApi";
import Loader from "../../components/Loader/Loader";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? "/movies");
  useEffect(() => {
    getDetails(movieId)
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => console.log(err.message));
  }, [movieId]);

  const { genres, title, overview, poster_path, vote_average } = movie;

  return (
    <>
      <Link to={backLocationRef.current}>Go back</Link>
      <div>
        <img
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt={title}
        />
        <div>
          <div>
            <h2>{title}</h2>
            <p>User Score: {Math.round((vote_average * 100) / 10)}%</p>
          </div>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h4>Genres</h4>
            <p>
              {genres
                ? genres
                    .slice(0, 3)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(({ id, name }) => {
                      return <span key={id}>{`${name} `}</span>;
                    })
                : ""}
            </p>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense>
            <Outlet fallback={<Loader />} />
          </Suspense>
        </div>
      </div>
    </>
  );
};
export default MovieDetails;
