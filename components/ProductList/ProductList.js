import Product from "../Product/Product";

function ProductList({ list }) {
  return (
    <div data-testid="productlist">
      {list.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          preview={product.preview}
        />
      ))}
    </div>
  );
}

export default ProductList;
