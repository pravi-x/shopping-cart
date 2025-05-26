import styles from "./NavigationBar.module.css";
import { useState, useEffect } from "react";

function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${styles.navContainer} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.leftLinks}>
        <p className={styles.navLink}>Home</p>
        <p className={styles.navLink}>Products</p>
      </div>
      <div className={styles.rightLinks}>
        <p className={styles.navLink}>My Cart</p>
      </div>
    </nav>
  );
}

export default NavigationBar;
