import styles from "./cartProduct.module.css";
import { useProducts } from "../../context/apiContext.js";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext.js";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function CartProduct({ id, quantity }) {
  const products = useProducts();
  const cart = useContext(CartContext);

  const product = products.find((product) => product.id === id);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.cartContent}>
      <div className={styles.cart}>
        <img src={product.image} alt={product.title} />
        <div>
          <p>{product.title} </p>
          <p>{product.price}تومان</p>
          <p>تعداد: {quantity}</p>
        </div>
      </div>
      <div className={styles.leftCart}>
        <Link to="/products">
          <IoIosArrowBack />
        </Link>
        <button
          className={styles.deleteBtn}
          onClick={() => cart.deleteFromCart(id)}
        >
          <RiDeleteBin5Line />
          حذف از سبد خرید
        </button>
      </div>
    </div>
  );
}
export default CartProduct;
