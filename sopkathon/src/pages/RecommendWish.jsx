import { useState } from 'react';
import RecommendWishTitle from '../components/RecommendWish/RecommendWishTitle';
import RecommendWishHeader from './../components/RecommendWish/RecommendWishHeader';
import Wishlist from './../components/RecommendWish/WishList';
import styled from 'styled-components';

const RecommendWish = () => {
  const data = [
    { id: 1, title: '런닝을 한강에서 뛰기', checked: false },
    { id: 2, title: '런닝을 한강에서 뛰기', checked: false },
    { id: 3, title: '런닝을 한강에서 뛰기', checked: false },
    { id: 4, title: '런닝을 한강에서 뛰기', checked: false },
    { id: 5, title: '런닝을 한강에서 뛰기', checked: false },
    { id: 6, title: '런닝을 한강에서 뛰기', checked: false },
    { id: 7, title: '런닝을 한강에서 뛰기', checked: false },
  ];

  const [checkedIds, setCheckedIds] = useState([]);

  const handleCheck = (id) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((checkedId) => checkedId !== id) : [...prev, id],
    );
  };

  const handleButtonClick = () => {
    console.log('checked IDs:', checkedIds);
  };

  return (
    <>
      <RecommendWishHeader />
      <RecommendWishTitle>국룰 위시리스트</RecommendWishTitle>
      <WishlistWrapper>
        {data.map((item) => (
          <Wishlist key={item.id} data={item} onCheck={() => handleCheck(item.id, 'global')} />
        ))}
      </WishlistWrapper>
      <WishlistWrapper>
        <RecommendWishTitle>우리만의 위시리스트 선택하기</RecommendWishTitle>
        {data.map((item) => (
          <Wishlist key={item.id} data={item} onCheck={() => handleCheck(item.id, 'our')} />
        ))}
      </WishlistWrapper>
      <WideBtnWrapper>
        <WideBtnStyled onClick={handleButtonClick}>우리 다 정했어</WideBtnStyled>
      </WideBtnWrapper>
    </>
  );
};

export default RecommendWish;

const WishlistWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const WideBtnWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2.8rem;
`;

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
