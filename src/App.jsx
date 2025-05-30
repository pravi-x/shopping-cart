import { useEffect, useState, createContext } from "react";
import NavigationBar from "./components/NavigationBar.jsx";

import products from "./dummyData.js";
export const ProductContext = createContext();
// πχ στο App.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Outlet } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(products);
  }, []); // <- empty dependency array = run once on mount

  return (
    <ProductContext.Provider value={{ data, setData }}>
      <NavigationBar />
      <Outlet />
    </ProductContext.Provider>
  );
}

export default App;
