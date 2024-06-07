import styles from "./header.module.css";
import Login from "../../modals/login/login";
import Basket from "../../modals/basket/basket";
import Profile from "../profile/profile";

import { MdLogin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { FlagContext } from "../../context/flagContext";

import Logo from "../../assets/logoo.jpeg";

function Header() {
  const [openProfile, setOpenProfile] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);

  const cart = useContext(CartContext);
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const { isLogedIn, setIsLogedIn } = useContext(FlagContext);
  setIsLogedIn(isLogedIn && true);

  return (
    <div className={styles.header}>
      <a href="/">
        <img className={styles.logo} src={Logo} alt="logoImage" />
      </a>
      <div id="searchBox" className={styles.searchBox}>
        <input type="search" placeholder="جستجو" />
        <span>
          <CiSearch style={{ color: "#2F5ED6" }} />
        </span>
      </div>
      <ul className={styles.headMenu}>
        {isLogedIn && (
          <li
            className={styles.prfItem}
            onClick={() => setOpenProfile((prev) => !prev)}
          >
            <CgProfile />
            حساب کاربری
          </li>
        )}
        <div>{openProfile && <Profile />}</div>
        <li
          onClick={() => {
            setOpenBasket(true);
          }}
        >
          <SlBasket className={styles.headBtn} />
          سبد خرید
        </li>
        <p className={styles.counter}>{productCount}</p>
        <div>
          {openBasket && (
            <Basket closeModal={setOpenBasket} productCount={productCount} />
          )}
        </div>
        {!isLogedIn && (
          <li
            onClick={() => {
              setOpenLogin(true);
            }}
          >
            <MdLogin className={styles.headBtn} />
            ورود/ثبت نام
          </li>
        )}
        <div>{openLogin && <Login closeModal={setOpenLogin} />}</div>
      </ul>
    </div>
  );
}
export default Header;
