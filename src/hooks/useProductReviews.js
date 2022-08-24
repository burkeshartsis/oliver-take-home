import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useProductReviews = () => {
  const { productId } = useParams();

  const getProduct = async () => {
    const { data } = await axios.get(`http://localhost:3004/products/${productId}/reviews`);

    return data;
  };

  return useQuery(['product', productId, 'reviews'], getProduct);
};

export default useProductReviews;
