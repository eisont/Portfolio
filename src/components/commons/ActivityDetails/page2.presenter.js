import * as S from "./page2.styles";

export default function Page2UI() {
  return (
    <S.Wrapper>
      <S.Info>
        <S.Title1>나의 소개</S.Title1>
        <S.Hr />
        <S.ProfileImg src="/huni/DSC02462.JPG" />
        <S.Text>
          <img src="phone.svg" />
          010-8527-8113
        </S.Text>
        <S.Text>
          <img src="gmail.svg" />
          rlaclgns321@gmail.com
        </S.Text>
        <S.Text>
          <img src="github.svg" />
          <p>github</p>
        </S.Text>
        <S.Text>
          <img src="notion.png" />
          blog
        </S.Text>
      </S.Info>
      <S.About>
        <S.Title1>나의 소개</S.Title1>
        <S.Hr />
        <S.Title2>나의 경력/경험</S.Title2>
        <S.Title2>나의 관심사</S.Title2>
        <S.Title2>나는 어떤 개발자?</S.Title2>
      </S.About>
    </S.Wrapper>
  );
}
