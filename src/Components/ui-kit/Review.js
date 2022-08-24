import styled from 'styled-components';

const Author = styled.figcaption`
  padding: 1rem 0;
  text-align: right;
  text-transform: capitalize;
`;

const Content = styled.figure`
  margin: 0;
`;

const Quote = styled.blockquote`
  margin: 0;
  padding: 1rem;
  background: #efefef;
  border-radius: 0.5rem;
`;

const Rating = styled.span`
  padding-left: 0.5rem;
`;

const Review = ({ author, content, rating, title }) => {
  const getStarRating = ' ⭐️ '.repeat(rating);

  return (
    <li>
      <h3>
        {title} <Rating>{getStarRating}</Rating>
      </h3>
      <Content>
        <Quote>{content}</Quote>
        <Author>— {author}</Author>
      </Content>
    </li>
  );
};

export default Review;
