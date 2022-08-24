import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useProduct = () => {
  const { productId } = useParams();

  const getProduct = async () => {
    const { data } = await axios.get(`http://localhost:3004/products/${productId}/`);

    return data;
  };

  return useQuery(['product', productId], getProduct);
};

export default useProduct;
