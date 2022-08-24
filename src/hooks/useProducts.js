import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getProducts = async () => {
  const { data } = await axios.get('http://localhost:3004/products');

  return data;
};

const useProducts = () => {
  return useQuery(['products'], getProducts);
};

export default useProducts;
