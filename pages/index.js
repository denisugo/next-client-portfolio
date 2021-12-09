import Meta from "../components/Head/Meta";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { routes } from "../config/constants";

export default function Home({ list, user, isMobile }) {
  //TODO: select user, render 'add new' button if admin

  return (
    <>
      <Meta title="Main page" description="test" />
      <Header isMobile={isMobile} />
      <ProductList list={list} isMobile={isMobile} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const endpoint = routes.products;
  const category = context.query.category;

  const isMobile = false;

  const response = await fetch(
    `${process.env.HOST}${endpoint}/?category=${category}`
    // {
    //   headers: {
    //     Cookie:
    //       "connect.sid=s%3ARDr0tqk0e4sIOJshep1Qm0AQ5FjBhxBV.QJ7A3oDC8fR7BiV4mhJBZSDiRWrw3R11cIQKwuvIsSE",
    //   },
    // }
  );
  if (!response.ok)
    return {
      props: {
        list: null,
        user: null,
        isMobile,
      },
    };

  const jsonResponse = await response.json();
  const list = jsonResponse.products;
  const user = jsonResponse.user ? jsonResponse.user : null; // TODO: add this value as payload in initUser
  // console.log("====================================");
  // console.log(context.req.cookies);
  // console.log(response.headers.get("set-cookie"));
  // console.log(user);
  // console.log("====================================");

  return {
    props: {
      list,
      user,
      isMobile,
    },
  };
};
