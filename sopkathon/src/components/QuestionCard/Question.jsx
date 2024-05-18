import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { getQuestion } from '../../apis/getQuestion';
import { postWish } from '../../apis/postWish';
import { useGetRandomId } from '../../hooks/useGetRandomId';

const Question = ({ setProgress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const sliderRef = useRef(null);
  const { setUsedIds, randomNumber } = useGetRandomId();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestion();
        console.log(response.data.data);
        if (Array.isArray(response.data.data)) {
          const filteredQuestions = response.data.data.filter(
            (question) => question.question_id !== 1000,
          );
          setQuestions(filteredQuestions);
        } else {
          console.error('Fetched data is not an array');
        }
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      }
    };

    fetchQuestions();
  }, [randomNumber]);

  useEffect(() => {
    if (questions.length > 0) {
      const question = questions[currentIndex];
      if (question) {
        setCurrentQuestion(question.content);
      } else {
        setCurrentQuestion('');
      }
    }
  }, [currentIndex, questions]);

  const handleApprove = async () => {
    if (currentIndex === null || questions.length === 0) {
      return;
    }
    const questionId = questions[currentIndex].question_id;
    try {
      await postWish(questionId, 1);
      setUsedIds((prev) => [...prev, questionId]);
      setProgress((prev) => prev + 1);
      handleNextCard(); // 선택 후 다음 카드로 이동
    } catch (error) {
      console.error('Error approving question:', error);
    }
  };

  const handleNextCard = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      sliderRef.current.slickGoTo(nextIndex);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    afterChange: (index) => setCurrentIndex(index),
  };

  return (
    <CardWrapper>
      <SliderWrapper ref={sliderRef} {...settings}>
        {questions &&
          questions.map(
            (question, index) =>
              question.question_id !== 1000 && (
                <Slide key={index} $isActive={index === currentIndex}>
                  <img src={question.image} />
                </Slide>
              ),
          )}
      </SliderWrapper>
      <QuestionTxt>{currentQuestion}</QuestionTxt>
      <ButtonWrapper>
        <SelectBtn onClick={handleApprove}>선택</SelectBtn>
        <NextBtn onClick={handleNextCard}>넘기기</NextBtn>
      </ButtonWrapper>
    </CardWrapper>
  );
};

export default Question;

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const SliderWrapper = styled(Slider)`
  width: 100%;
  .slick-slide > div {
    padding: 0 1.8rem;
  }
  .slick-track {
    height: 37rem;
  }
`;

const Slide = styled.div`
  width: ${({ $isActive }) => ($isActive ? '23rem' : '20rem')};
  height: ${({ $isActive }) => ($isActive ? '36rem' : '32rem')};
  padding: 0.5rem;
  border-radius: 0.8rem;

  transition:
    width 0.5s,
    height 0.5s,
    opacity 0.5s;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.5)};
  h3 {
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 230px;
    height: 363px;
  }
`;

const QuestionTxt = styled.span`
  padding: 2.6rem 8rem 2.5rem 8.1rem;
  width: 100%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.Heading3};
`;

const ButtonWrapper = styled.section`
  display: flex;
  gap: 2rem;
`;

const SelectBtn = styled.button`
  width: 16.3rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 0.8rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.blue05};
  color: ${({ theme }) => theme.colors.blue02};
  ${({ theme }) => theme.fonts.Body1};
`;

const NextBtn = styled.button`
  width: 16.3rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 0.8rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.blue02};
  color: ${({ theme }) => theme.colors.blue05};
  ${({ theme }) => theme.fonts.Body1};
`;
