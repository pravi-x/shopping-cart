import Product from "./Product";

function ProductList({ data }) {
  return (
    <div>
      {data.map((p) => {
        return <Product name={p.name} img={p.img} price={p.price} />;
      })}
    </div>
  );
}

export default ProductList;
