import { Provider } from "react-redux";
import { store } from "../app/store";

import Layout from "../components/Layout/Layout";
import "../styles/globals/reset.css";
import "../styles/globals/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
