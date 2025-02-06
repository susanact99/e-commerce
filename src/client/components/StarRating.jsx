import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export function StarRating({ rating, count }) {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="star full" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="star half" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="star empty" />
      ))}
      <span className="count"> ({count})</span>
    </div>
  );
}

