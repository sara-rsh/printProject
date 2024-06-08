import React from "react";
import styles from "./hotSells.module.css";
import { CiDiscount1 } from "react-icons/ci";
import H1 from "../../assets/s1.jpeg";
import H2 from "../../assets/s2.jpeg";
import H5 from "../../assets/s3.jpeg";
import H4 from "../../assets/s4.jpeg";
import H3 from "../../assets/s5.jpeg";
// import { useState } from "react";

// function handleHover() {
//   const element = document.getElementById("hover");
//   if (element) {
//     element.style.display = "none";
//   }
// }

export default function HotSells() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleHover = () => {
//     setIsHovered(true);
//   };

//   const handleLeave = () => {
//     setIsHovered(false);
//   };

  return (
    <div className={styles.container}>
      <div className={styles.topHot}>
        <CiDiscount1 className={styles.hotIcon} />
        <h1>فروش ویژه</h1>
      </div>
      <div className={styles.hotPart}>
        <div className={styles.shadow}>
          <img src={H1} alt="image1" />
          <h3>پرینتر لیزری اچ پی مدل </h3>
        </div>
        <div className={styles.shadow}>
          <img src={H2} alt="image2" />
          <h3>پرینتر چند کاره لیزری اچ‌پی مدل  </h3>
        </div>
        <div className={styles.shadow}>
          <img src={H3} alt="image3" />
          <h3>اچ پی لیزرجت پرو 400 کالر MFP M475dw</h3>
        </div>
        <div className={styles.shadow}>
          <img src={H4} alt="image4" />
          <h3> پرینتر چندکاره لیزری کانن مدل  </h3>
        </div>
        <div className={styles.shadow}>
          <img src={H5} alt="image5" />
          <h3>پرینتر جوهرافشان کانن مدل   </h3>
        </div>
      </div>
    </div>
  );
}
