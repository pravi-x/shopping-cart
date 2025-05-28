import Slider from "react-slick";
import { useContext } from "react";
import Product from "./Product";
import styles from "./ProductList.module.css";
import { ProductContext } from "../App";

function ProductList() {
  const data = useContext(ProductContext);
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

  return (
    <>
      <h1 className={styles.centerTitle}>Products</h1>
      <div style={{ padding: "1rem" }}>
        <Slider {...settings}>
          {data.map((p, i) => (
            <Product key={i} name={p.name} img={p.img} price={p.price} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ProductList;
