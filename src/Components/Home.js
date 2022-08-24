import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useProducts from '../hooks/useProducts';
import LoadingIndicator from './ui-kit/LoadingIndicator';
import ProductCard from './ui-kit/ProductCard';

const Feed = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 385px) {
    flex-direction: column;
  }
`;

const FeedItem = styled.li`
  max-width: 360px;
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
            <FeedItem>
              <StyledLink to={`/product/${product.id}`}>
                <ProductCard
                  imageSrc={'https://source.unsplash.com/random/900x900?furniture'}
                  key={product.id}
                  title={product.name}
                />
              </StyledLink>
            </FeedItem>
          ))
        )}
      </Feed>
    </main>
  );
};

export default Home;
