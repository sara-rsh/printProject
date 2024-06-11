import styles from "./basket.module.css";
import BackDrop from "../BackDrop/backDrop";
import { useProducts } from "../../context/apiContext";
import { useContext, useState , useEffect} from "react";
import { CartContext } from "../../context/cartContext.js";
import { FlagContext } from "../../context/flagContext.js";
import CartProduct from "../../components/cartProduct/cartProduct.jsx";
import EmptyBasket from "../../assets/Illustration.jpg";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoo.jpeg";


function Basket({ closeModal, productCount }) {
  const cart = useContext(CartContext);
  const products = useProducts();

  const { isLogedIn, setIsLogedIn } = useContext(FlagContext);
  setIsLogedIn(isLogedIn && true);

  const [isShown, setIsShown] = useState(true);
  const [orderError , setOrderError] = useState();

  let totalPrice = 0;
  cart.items.forEach((item) => {
    const product = products.find((product) => product.id === item.id);
    if (product) {
      totalPrice += item.quantity * product.price;
    }
  });

  const handleBasketModal = () => {
    if (isLogedIn) {
      setIsShown(false);
    } else setIsShown(true);
  };

  const onFormSubmit = () => {
    const data = { totalPrice: totalPrice };
    fetch("http://localhost:5000/getorders", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("Server response: ", data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrderError(data.message);
      })
      .catch((error) => console.error(error));
  },[]);

  return (
    <div>
      {isShown && (
        <BackDrop>
          <div className={styles.basket}>
            <div className={styles.topBasket}>
              <button
                className={styles.closeBtn}
                onClick={() => {
                  closeModal(false);
                }}
              >
                x
              </button>
              <h1>سبد خرید</h1>
              <img src={Logo} alt="logo" />
            </div>
            {productCount > 0 ? (
              <div className={styles.basketPart}>
                <div className={styles.basketContent}>
                  <h2>سبد خرید شما</h2>
                  <div>
                    {cart.items.map((item) => (
                      <CartProduct
                        key={item.id}
                        id={item.id}
                        quantity={item.quantity}
                      ></CartProduct>
                    ))}
                  </div>
                </div>
                <form onSubmit={onFormSubmit} className={styles.basketSubOrder}>
                  <div>
                    <div className={styles.topBasketSubOrder}>
                      <h3>کد تخفیف</h3>
                      <p>
                        کد تخفیف کد معرف کارت هدیه خود را در زیر وارد کرده و
                        دکمه ثبت رو بزنید تا در صورت داشتن اعتبار به سفارش شما
                        اعمال شود
                      </p>
                      <div className={styles.discount}>
                        <input type="text" />
                        <button type="submit">ثبت</button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bottomBasketSubOrder}>
                    <div>
                      <p>قیمت کالا ها</p>
                      <p>{totalPrice}تومان</p>
                    </div>
                    <div>
                      <p>مجموع تخفیف روی کالا ها</p>
                      <p>-</p>
                    </div>
                    <div>
                      <p>سود شما از خرید</p>
                      <p>-</p>
                    </div>
                    <div className={styles.lastDiv}>
                      <p>هزینه ارسال</p>
                      <p>100,000تومان</p>
                    </div>
                    <div>
                      <p>جمع مبلغ قابل پرداخت</p>
                      <p>{totalPrice}تومان</p>
                    </div>
                    <button
                    type="submit"
                      onClick={() =>
                        !isLogedIn
                          ? alert("شما ابتدا باید وارد سایت شوید")
                          : handleBasketModal()
                      }
                    >
                      {orderError && <Link to="/information">تکمیل سفارش</Link>}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className={styles.emptyBasket}>
                <h3>سبد خرید خالی است</h3>
                <img src={EmptyBasket} alt="emptyBasket" />
              </div>
            )}
          </div>
        </BackDrop>
      )}
    </div>
  );
}
export default Basket;
