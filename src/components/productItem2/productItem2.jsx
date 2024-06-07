import styles from "../productItem/productItem.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
// import { useProducts2 } from "../../context/apiContext2";
import { FaRegHeart } from "react-icons/fa6";

function ProductItem2({ products2 }) {
  const cart = useContext(CartContext);

  // console.log(products2);
  // const products2 = useProducts2();

  return (
    <div className={styles.productItem}>
      {products2.map((product) => (
        <div key={product.id} className={styles.item}>
          <img src={product.images} alt={product.title} />
          <div>
            <h3>{product.title}</h3>
            <FaRegHeart className={styles.heartIcon} />
          </div>
          <p id={product.id}>{product.price}</p>
          {cart.getProductQuantity(product.id) > 0 ? (
            <>
              <div className={styles.BasketCounter}>
                <p>تعداد:{cart.getProductQuantity(product.id)}</p>
                <div>
                  <button onClick={() => cart.addItemToCart(product.id)}>
                    +
                  </button>
                  <button onClick={() => cart.removeItemToCart(product.id)}>
                    -
                  </button>
                </div>
              </div>
              <button
                className={styles.basketBtn}
                onClick={() => cart.deleteFromCart(product.id)}
              >
                حذف از سبد خرید
              </button>
            </>
          ) : (
            <button
              className={styles.basketBtn}
              onClick={() => cart.addItemToCart(product.id)}
            >
              افزودن به سبد خرید
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
export default ProductItem2;
