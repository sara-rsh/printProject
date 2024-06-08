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
        <div className={styles.item}>
          <img src={product[4]} alt={product[3]} />
          <div>
            <h3>{product[3]}</h3>
            <FaRegHeart className={styles.heartIcon} />
          </div>
          <p id={product[0]}>{product[2]}</p>
          {cart.getProductQuantity(product[0]) > 0 ? (
            <>
              <div className={styles.BasketCounter}>
                <p>تعداد:{cart.getProductQuantity(product[0])}</p>
                <div>
                  <button onClick={() => cart.addItemToCart(product[0])}>
                    +
                  </button>
                  <button onClick={() => cart.removeItemToCart(product[0])}>
                    -
                  </button>
                </div>
              </div>
              <button
                className={styles.basketBtn}
                onClick={() => cart.deleteFromCart(product[0])}
              >
                حذف از سبد خرید
              </button>
            </>
          ) : (
            <button
              className={styles.basketBtn}
              onClick={() => cart.addItemToCart(product[0])}
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
