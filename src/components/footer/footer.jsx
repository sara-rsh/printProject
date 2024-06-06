import styles from "./footer.module.css";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaPinterest,
} from "react-icons/fa";
import License from "../../assets/License.jpg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.topFooter}>
        <div>
          <p className={styles.mailBoxP}>برای دریافت آخرین اخبار و تخفیف های جدید ایمیل خود را وارد کنید</p>
          <div className={styles.mailBox}>
            <input type="email" placeholder="ایمیل شما" />
            <button>ثبت</button>
          </div>
        </div>
        <div>
          <p>مارا در شبکه های اجتماعی دنبال کنید</p>
          <div className={styles.icons}>
            <FaInstagram style={{ color: "#ffffff" }} />
            <FaYoutube style={{ color: "#ffffff" }} />
            <FaFacebookF style={{ color: "#ffffff" }} />
            <FaPinterest style={{ color: "#ffffff" }} />
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className={styles.bottomFooterSec}>
          <h4>همراه با ما</h4>
          <a href="/">فروش محصولات</a>
          <a href="/">فرصت همکاری</a>
          <a href="/">تماس با ما</a>
          <a href="/">نقشه سایت</a>
        </div>
        <div className={styles.bottomFooterSec}>
          <h4>خدمات مشتریان</h4>
          <a href="/">سوالات متداول</a>
          <a href="/">حریم خصوصی</a>
          <a href="/">ثبت شکایات</a>
          <a href="/">ضمانت نامه محصولات</a>
        </div>
        <div className={styles.bottomFooterSec}>
          <h4>راهنمای خرید</h4>
          <a href="/">راهنمای ثبت سفارش</a>
          <a href="/">شیوه های پرداخت</a>
          <a href="/">نحوه ارسال سفارش ها</a>
          <a href="/">شرایط بازگرداندن محصول</a>
        </div>
        <div className={styles.licensePart}>
          <h2>فروشگاه</h2>
          <div>
            <span>تماس با پشتیبانی:021-3456000</span>
            <span>پاسخگویی 24 ساعته، 7روز هفته</span>
          </div>
          <img src={License} alt="license" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
