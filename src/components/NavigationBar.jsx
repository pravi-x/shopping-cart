import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div className={styles.navContainer}>
      <p className={styles.navLink}>Home</p>
      <p className={styles.navLink}>Products</p>
      <p className={styles.navLink}>My Cart</p>
    </div>
  );
}

export default NavigationBar;
