import styles from "./Product.module.css";

function Product({ name, img, price, onClick }) {
  return (
    <div className={styles.card}>
      <img src={img} alt={name} className={styles.productImage} />
      <h3 className={styles.productTitle}>{name}</h3>
      <p className={styles.productPrice}>{price.toFixed(2)} €</p>
      <button className={styles.addButton} onClick={onClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
