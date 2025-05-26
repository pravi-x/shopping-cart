import { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import HomePage from "./components/HomePage.jsx";
import products from "./dummyData.js";
import ProductList from "./components/ProductList.jsx";
// πχ στο App.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(products);
  }, []); // <- empty dependency array = run once on mount

  return (
    <>
      <NavigationBar />
      <HomePage />
      <ProductList data={data} />
    </>
  );
}

export default App;
