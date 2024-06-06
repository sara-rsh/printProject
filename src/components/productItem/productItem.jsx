import styles from "./productItem.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
// import { useProducts } from "../../context/apiContext.js";
import { FaRegHeart } from "react-icons/fa6";
// import Ax from '../../assets/3-5.jpg'

function ProductItem({products}) {
  const cart = useContext(CartContext);
  // const products = useProducts();

  return (
    <div className={styles.productItem}>
      {products.map((product) => (
        <div key={product.id} className={styles.item}>
          {/* <img src={Ax} alt={product.title} /> */}
          <img src={product.image} alt={product.title} />
          <div>
            <h3>{product.title}</h3>
            <FaRegHeart id="heart" className={styles.heartIcon}/>
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
export default ProductItem;
