import { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import HomePage from "./components/HomePage.jsx";
import products from "./dummyData.js";
import ProductList from "./components/ProductList.jsx";

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
