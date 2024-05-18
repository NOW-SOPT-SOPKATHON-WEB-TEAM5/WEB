import { useEffect, useState } from 'react';
import RecommendWishTitle from '../components/RecommendWish/RecommendWishTitle';
import RecommendWishHeader from './../components/RecommendWish/RecommendWishHeader';
import Wishlist from './../components/RecommendWish/WishList';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
const baseURL = import.meta.env.VITE_DEV_BASE_URL;
import axios from 'axios';

const RecommendWish = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL + `api/v1/finalWishes`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            memberId: 1,
          },
        });
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error();
      }
    };
    fetchData();
  }, []);

  const [checkedIds, setCheckedIds] = useState([]);

  const handleCheck = (id) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((checkedId) => checkedId !== id) : [...prev, id],
    );
  };

  const handleButtonClick = () => {
    const uncheckedIds = data.map((item) => item.wishId).filter((id) => !checkedIds.includes(id));
  };

  return (
    <>
      <RecommendWishHeader />
      <RecommendWishTitle>국룰 위시리스트</RecommendWishTitle>
      <WishlistWrapper>
        {data &&
          data
            .filter((item) => item.questionId === 0)
            .map((item) => (
              <Wishlist key={item.wishId} data={item} onCheck={() => handleCheck(item.wishId)} />
            ))}
      </WishlistWrapper>
      <WishlistWrapper>
        <RecommendWishTitle>우리만의 위시리스트 선택하기</RecommendWishTitle>
        {data &&
          data
            .filter((item) => item.questionId !== 0)
            .map((item) => (
              <Wishlist key={item.wishId} data={item} onCheck={() => handleCheck(item.wishId)} />
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
