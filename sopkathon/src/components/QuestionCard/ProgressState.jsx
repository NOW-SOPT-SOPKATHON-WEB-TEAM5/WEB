import styled from 'styled-components';

const ProgressState = ({ progress }) => {
  return <ProgressWrapper>{progress}</ProgressWrapper>;
};

export default ProgressState;

const ProgressWrapper = styled.section`
  display: flex;
  width: 8.4rem;
  height: 3.6rem;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.yellow02};
`;
