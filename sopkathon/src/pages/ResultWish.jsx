import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { useRef } from 'react';
import styled from 'styled-components';
import CheckLogo from './../assets/checked.svg?react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const baseURL = import.meta.env.VITE_DEV_BASE_URL;
const WideBtn = ({ name, handleDownload }) => {
  return <WideBtnStyled onClick={handleDownload}>{name}</WideBtnStyled>;
};

const ResultPage = () => {
  const divRef = useRef(null);
  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'final_wish.png');
        }
      });
    } catch (error) {
      alert('사진 다운로드에 실패하셨습니다.');
    }
  };

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL + `/api/v1/finalWishes`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            memberId: 1,
          },
        });
        setData(response.data);
      } catch (e) {
        alert(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <HeaderBox>
        <TopText>다음 만남부터 함께 할 </TopText>
        <SecondText>위시리스트가 완성됐어요!</SecondText>
      </HeaderBox>
      <div className="contents-wrapper" ref={divRef}>
        {data &&
          data.content.map((item) => (
            <div className="contents-box" key={item.index}>
              <ItemWrapper>
                <CheckStyled></CheckStyled>
                <p>{item.content}</p>
              </ItemWrapper>
            </div>
          ))}
      </div>

      <Footer>
        <WideBtn name={'이미지 저장하기'} handleDownload={handleDownload}></WideBtn>
      </Footer>
    </Wrapper>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .contents-wrapper {
    display: flex;
    justify-content: center;
    overflow-y: auto;
  }

  .contents-box {
    display: flex;
    justify-content: center;
    width: 337px;
    height: 60px;
    padding: 16px 14px;
    align-items: center;
    border-radius: 18px;
    background: #fff;
  }
  .contents-box::-webkit-scrollbar {
    display: none;
  }
`;

const HeaderBox = styled.div`
  width: 237px;

  margin: 81px 60px 30px 69px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopText = styled.p`
  display: flex;
  justify-content: center;

  color: #737373;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SecondText = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  color: #000;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin: 90px 20px 20px 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 335px;
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
  background: #3354ae;
  color: white;
  position: sticky;
  z-index: 2;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const CheckStyled = styled(CheckLogo)`
  width: 28px;
  height: 28px;
  margin-right: 12px;
`;
