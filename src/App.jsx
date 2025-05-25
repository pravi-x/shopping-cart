import { useState } from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import HomePage from "./components/HomePage.jsx";
import Product from "./components/Product.jsx";
import products from "./dummyData.js";

function App() {
  const [data, setData] = useState([]);
  setData(products);

  return (
    <>
      <NavigationBar />
      <HomePage />
      <ProductList products={data} />
    </>
  );
}

export default App;
