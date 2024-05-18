import styled from 'styled-components';

const RecommendWishHeader = () => {
  return (
    <RecommendWishHeaderWrapper>
      <HeaderDec>함께하면 좋을 </HeaderDec>
      위시리스트를 선택해보세요
    </RecommendWishHeaderWrapper>
  );
};

export default RecommendWishHeader;

const RecommendWishHeaderWrapper = styled.header`
  color: #000;
  font-family: Pretendard;
  font-size: 2.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin: 2rem;
`;

const HeaderDec = styled.p`
  color: ${({ theme }) => theme.fonts.gray700};
  ${({ theme }) => theme.fonts.Body2};
`;
