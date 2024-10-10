import { useEffect, useState } from "react";
import { getReview } from "../../services/getApi";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReview(movieId)
      .then((data) => setReviews(data.results))
      .catch((err) => console.log(err.message));
  }, [movieId]);

  console.log(reviews);
  return (
    <div>
      {reviews.length ? (
        <ul>
          {reviews.map(({ created_at, content, author }) => (
            <li key={created_at}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
