import styles from "./userInfo.module.css";
import React, { useState, useEffect } from "react";

function UserInfo() {
  const [isShowen, setIsShown] = useState(true);
  const [userError, setUserError] = useState();
  const [userReqError , setUserReqError] = useState()
  const [userInfo, setUserInfo] = useState([]);

  const handleUserInfoSubmit = () => {
    fetch("http://localhost:5000/userextrainfo", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response: ", data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
    // alert("سفارش شما ثبت شداطلاعات مربوطه برایتان ایمیل خواهد شد");
  };
  const handleUserReq = () => {
    // alert("درخواست شما ثبت شداطلاعات مربوطه برایتان ایمیل خواهد شد");
    fetch("http://localhost:5000/request", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response: ", data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/userextrainfo")
      .then((response) => response.json())
      .then((data) => {
        setUserError(data.massage);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/request")
      .then((response) => response.json())
      .then((data) => {
        setUserReqError(data.massage);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data.userinfo);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.info}>
      <h1>اطلاعات حساب کاربری</h1>
      <span onClick={() => setIsShown(true)}>اطلاعات کاربری</span>
      <span onClick={() => setIsShown(false)}> درخواست ها</span>
      {isShowen ? (
        <form className={styles.infoFields} onSubmit={handleUserInfoSubmit}>
          {userInfo.map((info) => (
            <div>
              <label>نام کاربری</label>
              <input type="text"  placeholder={userInfo[0]}/>
            </div>
          ))}
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
          {!userError ? <p className={styles.errorP}>اطلاعات ثبت نشد</p> : <p className={styles.accessP}>اطلاعات و سفارش شما با موفقیت ثبت شد</p>}
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
          {!userReqError ? <p className={styles.errorP}>درخواست ثبت نشد</p> : <p className={styles.accessP}>درخواست شما با موفقیت ثبت شد</p>}
          <button className={styles.infoBtn} type="submit">
            ثبت درخواست
          </button>
        </form>
      )}
    </div>
  );
}

export default UserInfo;
