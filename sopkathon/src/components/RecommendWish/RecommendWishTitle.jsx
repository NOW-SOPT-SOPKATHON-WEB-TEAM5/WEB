import { styled } from 'styled-components';

const RecommendWishTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default RecommendWishTitle;

const StyledTitle = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 23.4px */
`;
