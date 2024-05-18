import styled from 'styled-components';

const WideBtn = ({ name, handleDownload }) => {
  return <WideBtnStyled onClick={handleDownload}>{name}</WideBtnStyled>;
};

export default WideBtn;

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
  background: #464646;
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
