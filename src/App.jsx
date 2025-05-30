import { useEffect, useState, createContext } from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import products from "./dummyData.js";
export const ProductContext = createContext();
// πχ στο App.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Outlet } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
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
      <ToastContainer position="bottom-center" />
    </ProductContext.Provider>
  );
}

export default App;
