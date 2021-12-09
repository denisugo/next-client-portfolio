import Image from "next/image";
import style from "../../styles/Product/Product.module.css";

function Product({ name, description, price, preview }) {
  return (
    <div className={style.product} data-testid="product">
      <div className={style.preview}>
        <Image
          className={style.image}
          src={preview}
          layout="responsive"
          width={1}
          height={1}
          alt="Product preview"
        />
      </div>
      <h3 className={style.name}>{name}</h3>
      <p className={style.description}>{description}</p>
      <p className={style.price}>{price}</p>
    </div>
  );
}

export default Product;
