import { useState } from 'react';
import styled from 'styled-components';
import ProgressState from '../components/QuestionCard/ProgressState';
import Question from '../components/QuestionCard/Question';

const QuestionCard = () => {
  const [progress, setProgress] = useState(0);
  return (
    <QuestionCardWrapper>
      <ProgressState progress={progress} />
      <Question setProgress={setProgress} />
    </QuestionCardWrapper>
  );
};

export default QuestionCard;

const QuestionCardWrapper = styled.div`
  padding: 1rem;
`;
