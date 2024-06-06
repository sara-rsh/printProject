import React, { useState } from "react";
import styles from "./information.module.css";
import Avatar from "../../assets/Rectangle 5.jpg";
import { FlagContext } from "../../context/flagContext";
import { useContext } from "react";
import HomePage from "../homePage/homePage";
import UserInfo from "../../components/userInfo/userInfo";
import Orders from "../../components/orders/orders";

export default function Information() {
  const { isLogedIn, setIsLogedIn } = useContext(FlagContext);
  const [isInfoUserShowen, setIsInfoUserShowen] = useState(true);
  const [isOrderShow, setIsOrderShow] = useState(false);
  return (
    <div>
      {isLogedIn ? (
        <div className={styles.infoPage}>
          <div className={styles.topPrf}>پروفایل</div>
          <div className={styles.prf}>
            <div className={styles.prfCard}>
              <div className={styles.prfCardTop}>
                <img src={Avatar} alt="avatar" />
                <span>نام کاربری</span>
                <span>شماره موبایل</span>
              </div>
              <div className={styles.prfCardMiddle}>
                <span>اعتبار خرید</span>
                <span>تعداد سفارش ها</span>
                <span>تعداد درخواست ها</span>
              </div>
              <p
                onClick={() => {setIsOrderShow(true);setIsInfoUserShowen(false)}}
                className={styles.prfCardP}
              >
                تاریخچه سفارشات
              </p>
              {/* <p
                className={styles.prfCardP}
              >
                درخواست ها
              </p> */}
              <p
                onClick={() =>{setIsOrderShow(false);setIsInfoUserShowen(true)}}
                className={styles.prfCardP}
              >
                اطلاعات حساب کاربری
              </p>
              <p
                onClick={() => {
                  setIsLogedIn(false);
                }}
                className={styles.prfCardP}
              >
                خروج
              </p>
            </div>
            {isInfoUserShowen && <UserInfo />}
            {isOrderShow && <Orders />}
          </div>
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
}
