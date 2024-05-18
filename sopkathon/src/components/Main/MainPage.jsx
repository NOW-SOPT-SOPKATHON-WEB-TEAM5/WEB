import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const WideBtn = ({ name, handleLocation }) => {
  return <WideBtnStyled onClick={handleLocation}>{name}</WideBtnStyled>;
};

const MainPage = () => {
  const navigate = useNavigate();
  const handleLocation = () => {
    navigate(`/question`);
  };

  return (
    <Wrapper>
      <Header></Header>
      <GraphicWrapper></GraphicWrapper>
      <Footer>
        <WideBtn name={'시작하기'} handleLocation={handleLocation}></WideBtn>
      </Footer>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 245px;
  height: 70px;
`;

const GraphicWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 335px;
  height: 303px;
  margin-top: 44px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const WideBtnStyled = styled.button`
  display: flex;
  flex-direction: row;
  width: 335px;
  height: 50px;
  padding: 18px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: #3354ae;
  color: white;
  position: sticky;
  bottom: 0;
  z-index: 2;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;
