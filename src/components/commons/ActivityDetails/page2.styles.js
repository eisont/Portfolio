import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 80%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: centecr;
  align-items: start;
`;

export const Info = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
export const Title1 = styled.div`
  font-size: 30px;
  font-weight: 900;
`;
export const Hr = styled.div`
  margin: 10px 0 20px 0;
  width: 200px;
  height: 2px;
  border-radius: 50px;
  background: #999;
`;
export const ProfileImg = styled.img`
  width: 280px;
`;
export const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  img {
    margin-right: 10px;
    width: 20px;
  }
  &:hover {
    color: #999;
  }
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
export const Title2 = styled.div`
  font-size: 20px;
  font-weight: 900;
`;
