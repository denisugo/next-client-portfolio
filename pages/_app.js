import Layout from "../components/Layout/Layout";
import "../styles/globals/reset.css";
import "../styles/globals/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
