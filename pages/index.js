import styled from "@emotion/styled";
import Head from "next/head";
import Page2 from "../src/components/commons/ActivityDetails/page2.container";
import Page3 from "../src/components/commons/Page3/page3.container";
import Page4 from "../src/components/commons/Page4/Page4.container";
import * as S from "./../src/components/units/mainpage/mainpage.styles";

const Body = styled.div``;

export default function Home() {
  return (
    <Body>
      <Head>
        <title>chihuni</title>
        <link rel="icon" href="./chihunIcon.jpg" />
      </Head>
      <S.Wrapper>
        <S.Page>
          <div className="Page1">
            <S.HunImg src="/chihunIcon.jpg" />
            <S.Title>huni</S.Title>
            <S.Text>어제보다 성장하는 프론트엔드 개발자</S.Text>
            <S.IcomBox>
              <S.IconImg style={{ borderRadius: "50px" }} src="/github.png" />
              <S.IconImg src="/notion.png" />
              <S.IconImg src="/Gmail.png" />
            </S.IcomBox>
          </div>
        </S.Page>

        <S.Page>
          <Page2 />
        </S.Page>
        <S.Page>
          <Page3 />
        </S.Page>
        <S.Page>
          <Page4 />
        </S.Page>
      </S.Wrapper>
    </Body>
  );
}
