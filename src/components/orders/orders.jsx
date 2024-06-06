import styles from "./orders.module.css";
import React from "react";
import NoOrder from "../../assets/No Orders.png";
import { useState } from "react";

function Orders() {
  const [isOrderEmpty, setIsOrderEmpty] = useState(false);

  return (
    <div className={styles.orders}>
      <h1>تاریخچه سفارشات</h1>
      <div className={styles.topOrders}>
        <span>جاری</span>
        <span>تحویل شده</span>
      </div>
      {isOrderEmpty ? (
        <div></div>
      ) : (
        <img className={styles.noOrders} src={NoOrder} alt="no order" />
      )}
    </div>
  );
}

export default Orders;
