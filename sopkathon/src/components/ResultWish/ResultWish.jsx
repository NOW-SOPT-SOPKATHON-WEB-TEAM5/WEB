import styled from 'styled-components';
import WideBtn from '../common/WideBtn';

const ResultPage = () => {
  return (
    <Wrapper>
      <HeaderBox>
        <TopText>다음 만남부터 함께 할 </TopText>
        <SecondText>위시리스트가 완성됐어요!</SecondText>
      </HeaderBox>
      <div>
        <GraphicImg></GraphicImg>
      </div>

      <Footer>
        <WideBtn name={'이미지 저장하기'}></WideBtn>
      </Footer>
    </Wrapper>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    display: flex;
    justify-content: center;
  }
`;

const HeaderBox = styled.div`
  width: 237px;
  height: 50px;
  margin: 81px 60px 69px 69px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopText = styled.p`
  display: flex;
  justify-content: center;

  color: #737373;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SecondText = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  color: #000;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin: 90px 20px 20px 20px;
`;

const GraphicImg = styled.div`
  display: flex;
  justify-content: center;
  width: 335px;
  height: 400px;
`;
