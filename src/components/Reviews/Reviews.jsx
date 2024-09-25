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

  return (
    <div>
      <ul>
        {reviews.map(({ created_at, content, author }) => (
          <li key={created_at}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
