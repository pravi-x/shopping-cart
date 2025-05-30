import { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Outlet } from "react-router-dom";
import { ProductContext } from "./ProductContext.jsx";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((products) => {
        // Add countInCart: 0 to each product
        const productsWithCount = products.map((product) => ({
          ...product,
          countInCart: 0,
        }));

        setData(productsWithCount);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  console.log(data);
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
