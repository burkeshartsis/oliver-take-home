import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useProducts from '../hooks/useProducts';
import LoadingIndicator from './ui-kit/LoadingIndicator';
import ProductCard from './ui-kit/ProductCard';

const Feed = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Home = () => {
  const { data: products, isLoading } = useProducts();

  return (
    <main>
      <Feed>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          products.map((product) => (
            <li>
              <StyledLink to={`/product/${product.id}`}>
                <ProductCard
                  imageSrc={'https://source.unsplash.com/random/900x900?furniture'}
                  key={product.id}
                  title={product.name}
                />
              </StyledLink>
            </li>
          ))
        )}
      </Feed>
    </main>
  );
};

export default Home;
