import { useState } from 'react';
import RecommendWishTitle from '../components/RecommendWish/RecommendWishTitle';
import WideBtn from '../components/common/WideBtn';
import RecommendWishHeader from './../components/RecommendWish/RecommendWishHeader';
import Wishlist from './../components/RecommendWish/WishList';
import styled from 'styled-components';

const RecommendWish = () => {
  const data = {
    global_wishlist: [
<<<<<<< HEAD
      { id: 1, title: '런닝을 한강에서 뛰기', checked: false },
      { id: 2, title: '런닝을 한강에서 뛰기', checked: false },
    ],
    our_wishlist: [
      { id: 1, title: '런닝을 한강에서 뛰기', checked: false },
      { id: 2, title: '런닝을 한강에서 뛰기', checked: false },
      { id: 3, title: '런닝을 한강에서 뛰기', checked: false },
      { id: 4, title: '런닝을 한강에서 뛰기', checked: false },
      { id: 5, title: '런닝을 한강에서 뛰기', checked: false },
=======
      { id: 1, title: '런닝을 한강에서 뛰기', checked: true },
      { id: 2, title: '런닝을 한강에서 뛰기', checked: false },
    ],
    our_wishlist: [
      { id: 1, title: '런닝을 한강에서 뛰기', checked: true },
      { id: 2, title: '런닝을 한강에서 뛰기', checked: true },
      { id: 3, title: '런닝을 한강에서 뛰기', checked: true },
      { id: 4, title: '런닝을 한강에서 뛰기', checked: true },
      { id: 5, title: '런닝을 한강에서 뛰기', checked: true },
>>>>>>> develop
    ],
  };

  const [checkedIds, setCheckedIds] = useState(() => {
    const globalChecked = data.global_wishlist
      .filter((item) => item.checked)
      .map((item) => item.id);
    const ourChecked = data.our_wishlist.filter((item) => item.checked).map((item) => item.id);
    return [...globalChecked, ...ourChecked];
  });

  const handleCheck = (id) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((checkedId) => checkedId !== id) : [...prev, id],
    );
  };

  return (
    <>
      <RecommendWishHeader />
      <RecommendWishTitle>국룰 위시리스트</RecommendWishTitle>
      <WishlistWrapper>
        {data.global_wishlist.map((item, index) => (
          <Wishlist key={index} data={item} onCheck={handleCheck} />
        ))}
      </WishlistWrapper>
      <WishlistWrapper>
        <RecommendWishTitle>우리만의 위시리스트 선택하기</RecommendWishTitle>
        {data.our_wishlist.map((item, index) => (
          <Wishlist key={index} data={item} onCheck={handleCheck} />
        ))}
      </WishlistWrapper>
      <WideBtnWrapper>
        <WideBtn name={'우리 다 정했어'} />
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
