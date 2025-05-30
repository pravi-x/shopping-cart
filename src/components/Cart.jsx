import styles from "./Cart.module.css";
import { ProductContext } from "../App";
import { useContext } from "react";

function Cart() {
  const { data, setData } = useContext(ProductContext);

  function removeProduct(p) {
    setData((prev) =>
      prev.map((item) =>
        item.name === p.name
          ? { ...item, countInCart: Math.max(item.countInCart - 1, 0) }
          : item
      )
    );
  }

  function addProduct(p) {
    setData((prev) =>
      prev.map((item) =>
        item.name === p.name
          ? { ...item, countInCart: item.countInCart + 1 }
          : item
      )
    );
  }
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <h1 className={styles.title}>Your products</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price per Unit</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((p) => p.countInCart > 0)
            .map((p, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{p.name}</td>
                <td>
                  <button onClick={() => removeProduct(p)}>-</button>
                  {"  "}
                  {p.countInCart}
                  {"  "}
                  <button onClick={() => addProduct(p)}>+</button>
                </td>
                <td>{p.price} €</td>
                <td>{(p.countInCart * p.price).toFixed(2)} €</td>
              </tr>
            ))}
        </tbody>
      </table>
      <p className={styles.totalRow}>
        Total:{" "}
        {data
          .filter((p) => p.countInCart > 0)
          .reduce((sum, p) => sum + p.countInCart * p.price, 0)
          .toFixed(2)}{" "}
        €
      </p>
    </>
  );
}

export default Cart;
