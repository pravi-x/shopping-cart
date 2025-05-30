import Slider from "react-slick";
import { useContext } from "react";
import Product from "./Product";
import styles from "./ProductList.module.css";
import { ProductContext } from "../App";

function ProductList() {
  const { data, setData, isLoading } = useContext(ProductContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    lazyLoad: "ondemand",
    swipeToSlide: true,

    centerMode: true,
    centerPadding: "60px",
  };
  console.log("Products data:", data);

  function handleAddToCart(p) {
    setData((prev) =>
      prev.map((item) =>
        item.id === p.id ? { ...item, countInCart: item.countInCart + 1 } : item
      )
    );
  }

  return (
    <>
      <br />
      <h1 className={styles.centerTitle}>Products</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ padding: "1rem" }}>
          <Slider {...settings}>
            {data.map((p, i) => (
              <Product
                key={i}
                name={p.title}
                img={p.image}
                price={p.price}
                onClick={() => handleAddToCart(p)}
              />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}

export default ProductList;
