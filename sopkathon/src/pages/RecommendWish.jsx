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
          <Wishlist key={item.id} data={item} onCheck={() => handleCheck(item.id)} />
        ))}
      </WishlistWrapper>
      <WishlistWrapper>
        <RecommendWishTitle>우리만의 위시리스트 선택하기</RecommendWishTitle>
        {data.map((item) => (
          <Wishlist key={item.id} data={item} onCheck={() => handleCheck(item.id)} />
        ))}
      </WishlistWrapper>
      <WideBtnWrapper>
        <WideBtnStyled onClick={handleButtonClick}>
          선택 완료<ListLength>{checkedIds.length}</ListLength>
        </WideBtnStyled>
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
  position: absolute;
  bottom: 1vh;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
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
  background-color: ${({ theme }) => theme.colors.blue02};

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

const ListLength = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.blue02};

  display: flex;
  align-items: center;
  justify-content: center;
`;
