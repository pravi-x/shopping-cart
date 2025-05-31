import styles from "./NavigationBar.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.JPG";


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
      <img src={logo} alt="Logo" className={styles.logo} />

        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/products" className={styles.navLink}>
          Products
        </Link>
      </div>
      <div className={styles.rightLinks}>
        <Link to="/cart" className={styles.navLink}>
          My Cart
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
