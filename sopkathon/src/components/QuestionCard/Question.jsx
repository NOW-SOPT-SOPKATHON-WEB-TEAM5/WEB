import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';

const Question = ({ setProgress }) => {
  const cards = [
    {
      id: 1,
      data: '첫 번째 카드 데이터첫 번째 카드 데이터첫 번째 카드 데이터첫 번째 카드 데이터',
    },
    {
      id: 2,
      data: '두 번째 카드 데이터두 번째 카드 데이터두 번째 카드 데이터두 번째 카드 데이터',
    },
    {
      id: 3,
      data: '세 번째 카드 데이터세 번째 카드 데이터세 번째 카드 데이터세 번째 카드 데이터',
    },
  ];
  const [displayedCards, setDisplayedCards] = useState([cards[0]]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleApprove = async () => {
    try {
      const nextIndex = currentIndex + 1;
      if (nextIndex < cards.length) {
        setDisplayedCards((prevCards) => [...prevCards, cards[nextIndex]]);
        setCurrentIndex(nextIndex);
        sliderRef.current.slickGoTo(nextIndex);
        setProgress((prev) => prev + 1);
      }
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
    }
  };

  const handleNextCard = async () => {
    try {
      const nextIndex = currentIndex + 1;
      if (nextIndex < cards.length) {
        setDisplayedCards((prevCards) => [...prevCards, cards[nextIndex]]);
        setCurrentIndex(nextIndex);
        sliderRef.current.slickGoTo(nextIndex);
      }
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
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
        {displayedCards.map((card, index) => (
          <Slide key={index} $isActive={index === currentIndex}>
            <h3>{card.data}</h3>
          </Slide>
        ))}
      </SliderWrapper>
      <ButtonWrapper>
        <button onClick={handleApprove}>선택</button>
        <button onClick={handleNextCard}>넘기기</button>
      </ButtonWrapper>
    </CardWrapper>
  );
};

export default Question;

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  align-items: center;
  gap: 2rem;
`;

const SliderWrapper = styled(Slider)`
  width: 30rem;
  .slick-slide > div {
    padding: 0 1rem;
  }
  .slick-track {
    height: 25rem;
  }
  .slick-list {
    padding: 1rem;
  }
`;

const Slide = styled.div`
  padding: 1rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray400};
  transition: opacity 0.3s;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.5)};

  h3 {
    height: 20rem;
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonWrapper = styled.section`
  display: flex;
  gap: 2rem;
`;