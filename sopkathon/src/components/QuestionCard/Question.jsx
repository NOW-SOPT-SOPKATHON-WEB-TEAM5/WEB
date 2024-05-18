import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';

const Question = () => {
  const cards = [
    {
      id: 1,
      data: '첫 번째 카드 데이터',
    },
    {
      id: 2,
      data: '두 번째 카드 데이터',
    },
    {
      id: 3,
      data: '세 번째 카드 데이터',
    },
  ];
  const [displayedCards, setDisplayedCards] = useState([cards[0]]); // 초기 카드 데이터
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // post & get
  const handleApprove = async () => {
    // 서버로부터 데이터 가져오기
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

  // get만
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
    speed: 500,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentIndex(index),
  };

  return (
    <CardWrapper>
      <SliderWrapper ref={sliderRef} {...settings}>
        {displayedCards.map((card, index) => (
          <div key={index}>
            <h3>{card.data}</h3>
          </div>
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
  height: 30rem;
  padding: 1rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

const ButtonWrapper = styled.section`
  display: flex;
  gap: 2rem;
`;
