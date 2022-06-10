import "../styles/globals.css";
import { globalStyles } from "../src/commons/globalstyles/globalstyles";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
