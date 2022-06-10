import styled from "@emotion/styled";
import LayoutFooter from "./footer/Footer.container";
import LayoutHeader from "./header/Header.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;
const Body = styled.div``;

export default function Layout(props) {
  const router = useRouter();

  const mainpage = ["/"];
  const ismainpage = mainpage.includes(router.asPath);

  return (
    <Wrapper>
      {!ismainpage && <LayoutHeader />}
      <Body>{props.children}</Body>
      {!ismainpage && <LayoutFooter />}
    </Wrapper>
  );
}
