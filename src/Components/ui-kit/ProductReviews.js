import styled from 'styled-components';
import useProductRating from '../../hooks/useProductRating';
import useProductReviews from '../../hooks/useProductReviews';
import LoadingIndicator from './LoadingIndicator';
import Review from './Review';

const ReviewFeed = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductReviews = () => {
  const { data: reviews, isLoading } = useProductReviews();
  const averageProductRating = useProductRating();

  return (
    <section>
      {isLoading ? (
        <LoadingIndicator />
      ) : reviews.length ? (
        <>
          <h2>Reviews {averageProductRating > 0 && <small>({averageProductRating}/5)</small>}</h2>
          <ReviewFeed>
            {reviews.map((review) => (
              <Review
                author={review.author}
                content={review.body}
                key={review.id}
                rating={review.star_rating}
                title={review.headline}
              />
            ))}
          </ReviewFeed>
        </>
      ) : null}
    </section>
  );
};

export default ProductReviews;
