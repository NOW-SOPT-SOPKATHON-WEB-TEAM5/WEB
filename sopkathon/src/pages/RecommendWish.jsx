import RecommendWishTitle from '../components/RecommendWish/RecommendWishTitle';
import RecommendWishHeader from './../components/RecommendWish/RecommendWishHeader';
import Wishlist from './../components/RecommendWish/WishList';

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
      {data.global_wishlist.map((item, index) => (
        <Wishlist key={index} data={item} />
      ))}
      <RecommendWishTitle>우리만의 위시리스트 선택하기</RecommendWishTitle>
      {data.our_wishlist.map((item, index) => (
        <Wishlist key={index} data={item} />
      ))}
    </>
  );
};

export default RecommendWish;
