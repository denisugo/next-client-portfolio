import Image from "next/image";

function Product({ name, description, price, preview }) {
  return (
    <div data-testid="product">
      <Image
        src={preview}
        layout="responsive"
        width={1}
        height={1}
        alt="Product preview"
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Product;
