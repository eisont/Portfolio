import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;
  scroll-snap-type: both mandatory;
`;
export const Title = styled.div`
  margin: 20px 0;
  color: #fff;
  font-weight: 900;
  font-size: 40px;
  cursor: default;
`;
export const Text = styled.div`
  margin: 20px 0;
  color: #fff;
  font-weight: 900;
  font-size: 30px;
  cursor: default;
`;

export const IcomBox = styled.div`
  display: flex;
`;
export const HunImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const IconImg = styled.img`
  margin: 0 10px;
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: contain;
  cursor: pointer;
`;

export const Page = styled.div`
  scroll-snap-align: start;
  .Page1 {
    width: 100%;
    height: 100vh;
    background: #999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
