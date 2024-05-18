import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackgroundImg from '/src/assets/home.png';

const WideBtn = ({ name, handleLocation }) => {
  return <WideBtnStyled onClick={handleLocation}>{name}</WideBtnStyled>;
};

const MainPage = () => {
  const navigate = useNavigate();
  const handleLocation = () => {
    navigate(`/question`);
  };

  return (
    <TotalWrapper>
      <Wrapper>
        <Footer>
          <WideBtn name={'시작하기'} handleLocation={handleLocation}></WideBtn>
        </Footer>
      </Wrapper>
    </TotalWrapper>
  );
};

export default MainPage;

const TotalWrapper = styled.div`
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 680px;
`;

const WideBtnStyled = styled.button`
  width: 335px;
  height: 50px;
  padding: 18px 8px;

  margin-top: 5px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: #3354ae;
  color: white;
  position: sticky;

  z-index: 2;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;
