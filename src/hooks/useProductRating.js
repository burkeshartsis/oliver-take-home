import useProductReviews from './useProductReviews';

const useProductRating = () => {
  const { data: reviews } = useProductReviews();
  let averageRating = 0;

  if (reviews && reviews.length) {
    const sumOfRatings = reviews.reduce(
      (previousValue, currentValue) => previousValue + currentValue.star_rating,
      averageRating,
    );
    averageRating = sumOfRatings / reviews.length;
  }

  return averageRating;
};

export default useProductRating;
