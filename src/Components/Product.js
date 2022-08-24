import React from 'react';
import styled from 'styled-components';

import useProduct from '../hooks/useProduct';
import LoadingIndicator from './ui-kit/LoadingIndicator';
import ProductReviews from './ui-kit/ProductReviews';

const Content = styled.section`
  padding: 0 2rem;
`;

const Image = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #ccc;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 2rem;
`;

const Product = () => {
  const { data: product, isLoading: isLoadingProduct } = useProduct();

  return (
    <article>
      {isLoadingProduct ? (
        <LoadingIndicator />
      ) : (
        <>
          <Image src="https://source.unsplash.com/random/1920x1080?furniture" alt="welcome" />
          <Content>
            <Title>{product.name}</Title>
            <p>{product.description}</p>

            <ProductReviews />
          </Content>
        </>
      )}
    </article>
  );
};

export default Product;
