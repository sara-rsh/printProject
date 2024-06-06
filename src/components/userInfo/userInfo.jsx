import styles from "./userInfo.module.css";
import React, { useState } from "react";

function UserInfo() {
  const [isShowen, setIsShown] = useState(true);

  const handleUserInfoSubmit = () => {
    alert("سفارش شما ثبت شداطلاعات مربوطه برایتان ایمیل خواهد شد");
  };
  const handleUserReq = () => {
    alert("درخواست شما ثبت شداطلاعات مربوطه برایتان ایمیل خواهد شد");
  };

  return (
    <div className={styles.info}>
      <h1>اطلاعات حساب کاربری</h1>
      <span onClick={() => setIsShown(true)}>اطلاعات کاربری</span>
      <span onClick={() => setIsShown(false)}> درخواست ها</span>
      {isShowen ? (
        <form className={styles.infoFields} onSubmit={handleUserInfoSubmit}>
          <div>
            <label>نام کاربری</label>
            <input type="text" />
          </div>
          <div>
            <label>ایمیل</label>
            <input type="email" />
          </div>
          <div>
            <label>استان</label>
            <input type="text" />
          </div>
          <div>
            <label>شهر</label>
            <input type="text" />
          </div>
          <div>
            <label>کدپستی</label>
            <input type="text" />
          </div>
          <div>
            <label>ادرس کامل پستی</label>
            <input type="text" />
          </div>
          <button className={styles.infoBtn} type="submit">
            تکمیل اطلاعات
          </button>
        </form>
      ) : (
        <form
          className={styles.infoFields}
          style={{ display: "block" }}
          onSubmit={handleUserReq}
        >
          <div>
            <label>عنوان درخواست</label>
            <input type="text" />
          </div>
          <div>
            <label>توضیحات خرابی </label>
            <textarea type="text" />
          </div>
          <div>
            <label>تاریخ ثبت درخواست</label>
            <input type="date" />
          </div>
          <button className={styles.infoBtn} type="submit">
            ثبت درخواست
          </button>
        </form>
      )}
    </div>
  );
}

export default UserInfo;
