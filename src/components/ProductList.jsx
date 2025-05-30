import Slider from "react-slick";
import { useContext } from "react";
import Product from "./Product";
import styles from "./ProductList.module.css";
import { ProductContext } from "../ProductContext";
import { toast } from "react-toastify";

function ProductList() {
  const { data, setData, isLoading } = useContext(ProductContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    swipeToSlide: true,
    lazyLoad: "ondemand",
  };

  console.log("Products data:", data);

  function handleAddToCart(p) {
    setData((prev) =>
      prev.map((item) =>
        item.id === p.id ? { ...item, countInCart: item.countInCart + 1 } : item
      )
    );
    toast.success(`${p.title} added!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }

  return (
    <>
      <br />
      <h1 className={styles.centerTitle}>Products</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.sliderWrapper}>
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
