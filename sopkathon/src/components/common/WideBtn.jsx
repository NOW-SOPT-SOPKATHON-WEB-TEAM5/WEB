import styled from 'styled-components';

const WideBtn = ({ name }) => {
  return <WideBtnStyled>{name}</WideBtnStyled>;
};

export default WideBtn;

const WideBtnStyled = styled.button`
  display: flex;
  width: 335px;
  height: 50px;
  padding: 18px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: #464646;
  color: white;
`;
