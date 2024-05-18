import { styled } from 'styled-components';

const RecommendWishTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default RecommendWishTitle;

const StyledTitle = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  margin: 2rem;
`;
