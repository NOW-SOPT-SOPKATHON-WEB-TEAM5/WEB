import { useState } from 'react';
import styled from 'styled-components';
import ProgressState from '../components/QuestionCard/ProgressState';
import Question from '../components/QuestionCard/Question';

const QuestionCard = () => {
  const [progress, setProgress] = useState(0);
  return (
    <QuestionCardWrapper>
      <ProgressLayout>
        <ProgressState progress={progress} />
      </ProgressLayout>
      <Question setProgress={setProgress} />
    </QuestionCardWrapper>
  );
};

export default QuestionCard;

const QuestionCardWrapper = styled.div`
  padding: 5.7rem 0rem 2rem 0rem;
`;

const ProgressLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.8rem;
`;
