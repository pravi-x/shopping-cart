import styles from "./Product.module.css"; // Import the CSS module

function Product({ name, img, price, onClick }) {
  return (
    <div className={styles.productContainer}>
      {" "}
      {/* Apply the class from the module */}
      <img src={img} alt={name} className={styles.productImage} />
      <h3 className={styles.productName}>{name}</h3>
      <p className={styles.productPrice}>${price}</p>
      <button onClick={onClick} className={styles.buyButton}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
