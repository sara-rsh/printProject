import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { PiBasketFill } from "react-icons/pi";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { FlagContext } from "../../context/flagContext.js";
import { useContext, useState } from "react";

function Navbar() {
  const { isLogedIn, setIsLogedIn } = useContext(FlagContext);
  setIsLogedIn(isLogedIn && true);

  const [isReqError, setReqError] = useState(false);

  function handleReqError() {
    if (!isLogedIn) {
      setTimeout(function () {
        document.getElementById("reqError").style.display = "none";
      }, 5000);
      document.getElementById("reqError").style.display = "block";
    }
  }

  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <button>
            <AiFillHome className={styles.navIcons} />
            <Link to="/" className={styles.navItems}>
              صفحه اصلی
            </Link>
          </button>
        </li>
        <li>
          <button>
            <PiBasketFill className={styles.navIcons} />
            <Link to="/products" className={styles.navItems}>
              محصولات آماده{" "}
            </Link>
          </button>
        </li>
        <li onClick={handleReqError}>
          <button>
            <BsChatSquareQuoteFill className={styles.navIcons} />
            <Link
              onClick={
                !isLogedIn
                  ? () => setReqError(true)
                  : () => setReqError(setReqError)
              }
              to={isLogedIn && "/information"}
              className={styles.navItems}
            >
              درخواست تعمیر
            </Link>
            {isReqError && (
              <p id="reqError" className={styles.reqError}>
                <RiErrorWarningLine style={{ paddingLeft: ".5vw" }} />
                برای ثبت درخواست باید ابتدا وارد سایت شوید
              </p>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
