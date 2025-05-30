import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import { ProductContext } from "./ProductContext.jsx";

// Styles
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        const products = await res.json();

        const productsWithCount = products.map((product) => ({
          ...product,
          countInCart: 0,
        }));

        setData(productsWithCount);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ data, setData, isLoading }}>
      <NavigationBar />
      <Outlet />
      <Footer />
      <ToastContainer position="bottom-center" />
    </ProductContext.Provider>
  );
}

export default App;
