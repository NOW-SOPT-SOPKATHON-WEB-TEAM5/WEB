import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IcChecked from '../../assets/IcProgressChecked.svg?react';
import IcNotchecked from '../../assets/IcProgressNotChecked.svg?react';

const ProgressState = ({ progress }) => {
  const progressArray = Array.from({ length: progress });
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (progressArray.length === 3) {
      setTimeout(() => {
        setIsDone(true);
      }, 1000);
    }
  }, [progressArray]);

  useEffect(() => {
    if (isDone) {
      navigate('/recommend');
    }
  }, [isDone, navigate]);

  return (
    <ProgressWrapper>
      {progressArray.map((_, index) => (
        <IconChecked key={index} />
      ))}
      {progressArray.length < 3 &&
        Array.from({ length: 3 - progressArray.length }).map((_, index) => (
          <IconNotchecked key={index} />
        ))}
    </ProgressWrapper>
  );
};

export default ProgressState;

const ProgressWrapper = styled.section`
  display: flex;
  width: 8.4rem;
  height: 3.6rem;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  gap: 0.4rem;
  background-color: ${({ theme }) => theme.colors.yellow02};
`;

const IconChecked = styled(IcChecked)`
  width: 2rem;
  height: 2rem;
`;

const IconNotchecked = styled(IcNotchecked)`
  width: 2rem;
  height: 2rem;
`;
