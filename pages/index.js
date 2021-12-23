import { useState } from "react";

import Meta from "../components/Head/Meta";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import Search from "../components/Search/Search";
import { endpoints, routes } from "../config/constants";
import { initUser } from "../features/UserSlice/UserSlice";
import { wrapper } from "../app/store";

function Home({ list }) {
  // export default function Home({ list, user, isMobile }) {
  //TODO: select user, render 'add new' button if admin

  const [productList, setProductList] = useState(list);

  return (
    <>
      <Meta title="Main page" description="test" />
      <Header />
      <Search list={list} callback={setProductList} />
      <ProductList list={productList} />
    </>
  );
}

export default Home;
// export const getServerSideProps = async (context) => {
//   const endpoint = routes.products;
//   //TODO: delete category from query string, it will be parsed with use state and map functions
//   const category = context.query.category;

//   const isMobile = false;

//   const response = await fetch(
//     `${process.env.HOST}${endpoint}/?category=${category}`
//     // {
//     //   headers: {
//     //     Cookie:
//     //       "connect.sid=s%3ARDr0tqk0e4sIOJshep1Qm0AQ5FjBhxBV.QJ7A3oDC8fR7BiV4mhJBZSDiRWrw3R11cIQKwuvIsSE",
//     //   },
//     // }
//   );
//   if (!response.ok)
//     return {
//       props: {
//         list: null,
//         user: null,
//         isMobile,
//       },
//     };

//   const jsonResponse = await response.json();
//   const list = jsonResponse.products;
//   // if user already exists, dont do anything
//   const user = jsonResponse.user ? jsonResponse.user : null; // TODO: add this value as payload in initUser
//   // console.log("====================================");
//   // console.log(context.req.cookies);
//   // console.log(response.headers.get("set-cookie"));
//   //console.log(user);
//   // console.log("====================================");

//   return {
//     props: {
//       list,
//       user,
//       isMobile,
//     },
//   };
// };

// get products
// get user if cookies was provided

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const connectSidCookie = context.req.cookies["connect.sid"];
    const cookie = `connect.sid=${connectSidCookie}`;
    const endpoint = endpoints.products();
    const url = `${process.env.HOST}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        Cookie: connectSidCookie ? cookie : "",
      },
    });

    if (!response.ok)
      return {
        props: {
          list: null,
        },
      };

    const jsonResponse = await response.json();
    const list = jsonResponse.products;
    if (jsonResponse.user) store.dispatch(initUser(jsonResponse.user));
    else if (connectSidCookie)
      context.res.setHeader(
        "Set-cookie",
        "connect.sid=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
      );
    return {
      props: {
        list,
      },
    };
  }
);
