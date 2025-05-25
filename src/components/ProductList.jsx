import Product from "./Product";
import styles from "./ProductList.module.css";

function ProductList({ data }) {
  return (
    <div className={styles.productList}>
      {data.map((p) => (
        <Product name={p.name} img={p.img} price={p.price} />
      ))}
    </div>
  );
}

export default ProductList;
