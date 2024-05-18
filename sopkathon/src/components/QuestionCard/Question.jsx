import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { getQuestion } from '../../apis/getQuestion';
import { postWish } from '../../apis/postWish';
import { useGetRandomId } from '../../hooks/useGetRandomId';

const Question = ({ setProgress }) => {
  const cards = {
    data: [
      { id: 1, question: '즉흥적인 일탈 해본 적 있나요?1' },
      { id: 2, question: '즉흥적인 일탈 해본 적 있나요?2' },
      { id: 3, question: '즉흥적인 일탈 해본 적 있나요?3' },
      { id: 4, question: '즉흥적인 일탈 해본 적 있나요?4' },
      { id: 5, question: '즉흥적인 일탈 해본 적 있나요?5' },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState('');
  const sliderRef = useRef(null);
  const { usedIds, setUsedIds, cardId } = useGetRandomId();

  const handleApprove = async () => {
    if (!cardId) {
      console.error('No more questions available');
      return;
    }
    try {
      const question = getQuestion(cardId);
      postWish(cardId, 1);
      setQuestion(question.data);
      setUsedIds([...usedIds, cardId]);
      const nextIndex = currentIndex + 1;
      if (nextIndex <= cards.data.length) {
        sliderRef.current.slickGoTo(nextIndex);
        setProgress((prev) => prev + 1);
      }
    } catch (error) {
      console.error();
    }
  };

  const handleNextCard = async () => {
    try {
      const nextIndex = currentIndex + 1;
      if (nextIndex < cards.data.length) {
        setCurrentIndex(nextIndex);
        sliderRef.current.slickGoTo(nextIndex);
      }
    } catch (error) {
      console.error();
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
        {cards.data.map((card, index) => {
          return (
            <Slide key={index} $isActive={index === currentIndex}>
              <img src={card.src} />
            </Slide>
          );
        })}
      </SliderWrapper>
      <QuestionTxt>{question}</QuestionTxt>
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
    padding: 0 1rem;
  }
  .slick-track {
    height: 36rem;
  }
  .slick-list {
  }
`;

const Slide = styled.div`
  width: ${({ $isActive }) => ($isActive ? '23rem' : '20rem')};
  height: ${({ $isActive }) => ($isActive ? '36rem' : '32rem')};
  padding: 0.5rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray400};
  transition:
    width 0.5s,
    height 0.5s,
    opacity 0.5s;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.5)};
  h3 {
    height: 20rem;
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const QuestionTxt = styled.span`
  padding: 2.6rem 8rem 2.5rem 8.1rem;
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
