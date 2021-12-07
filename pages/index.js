import Meta from "../components/Head/Meta";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";

const list = [
  {
    id: 1,
    name: "Name",
    description: "Desc",
    price: 100,
    category: "health",
    preview: "/meds/omega.jpg",
  },
  {
    id: 2,
    name: "Name",
    description: "Desc",
    price: 100,
    category: "health",
    preview: "/meds/theanin.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Meta title="Main page" description="test" />
      <Header />
      <ProductList list={list} />
    </>
  );
}
