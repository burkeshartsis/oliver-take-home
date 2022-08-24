import styled from 'styled-components';

const Card = styled.div`
  border-radius: 1rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.0125);
  }
`;

const Image = styled.img`
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Title = styled.h2`
  padding: 0 1rem;
`;

const ProductCard = ({ imageSrc, onClick, title }) => (
  <Card onClick={onClick}>
    <Image src={imageSrc} />
    <Title>{title}</Title>
  </Card>
);

export default ProductCard;
