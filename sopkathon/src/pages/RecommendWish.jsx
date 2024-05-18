import RecommendWishTitle from '../components/RecommendWish/RecommendWishTitle';
import WideBtn from '../components/common/WideBtn';
import RecommendWishHeader from './../components/RecommendWish/RecommendWishHeader';
import Wishlist from './../components/RecommendWish/WishList';
import styled from 'styled-components';

const RecommendWish = () => {
  const data = {
    global_wishlist: [
      { title: '런닝을 한강에서 뛰기', checked: true },
      { title: '런닝을 한강에서 뛰기', checked: false },
    ],
    our_wishlist: [
      { title: '런닝을 한강에서 뛰기', checked: true },
      { title: '런닝을 한강에서 뛰기', checked: true },
      { title: '런닝을 한강에서 뛰기', checked: true },
      { title: '런닝을 한강에서 뛰기', checked: true },
      { title: '런닝을 한강에서 뛰기', checked: true },
    ],
  };

  return (
    <>
      <RecommendWishHeader />
      <RecommendWishTitle>국룰 위시리스트</RecommendWishTitle>
      <WishlistWrapper>
        {data.global_wishlist.map((item, index) => (
          <Wishlist key={index} data={item} />
        ))}
      </WishlistWrapper>
      <RecommendWishTitle>우리만의 위시리스트 선택하기</RecommendWishTitle>
      {data.our_wishlist.map((item, index) => (
        <Wishlist key={index} data={item} />
      ))}
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
