import styled from 'styled-components';
import IcChecked from './../../assets/IcChecked.svg?react';
import IcNChecked from './../../assets/IcNChecked.svg?react';
import { useState } from 'react';

const Wishlist = ({ data }) => {
  const [isChecked, setChecked] = useState(data.checked);

  const handleChecked = () => {
    setChecked(!isChecked);
  };

  return (
    <WishlistWrapper onClick={handleChecked}>
      <WishlistContent>{data.title}</WishlistContent>
      {isChecked ? <StyledIcChecked /> : <StyledIcNChecked />}
    </WishlistWrapper>
  );
};

export default Wishlist;

const WishlistWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 33.5rem;
  height: 63px;
  margin: 0.5rem auto;
  padding: 1rem;

  border-radius: 10px;
  background: #d9d9d9;
  cursor: pointer;
`;

const WishlistContent = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledIcChecked = styled(IcChecked)`
  width: 2rem;
  height: auto;
`;

const StyledIcNChecked = styled(IcNChecked)`
  width: 2rem;
  height: auto;
`;
