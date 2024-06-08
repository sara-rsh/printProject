import React from "react";
import styles from "./hotSells.module.css";
import { CiDiscount1 } from "react-icons/ci";
import H1 from "../../assets/s1.jpeg";
import H2 from "../../assets/s2.jpeg";
import H3 from "../../assets/s3.jpeg";
import H4 from "../../assets/s4.jpeg";
import H5 from "../../assets/s5.jpeg";

export default function HotSells() {
  return (
    <div className={styles.container}>
      <div className={styles.topHot}>
      <CiDiscount1 className={styles.hotIcon}/>
        <h1>فروش ویژه</h1>
      </div>
      <div className={styles.hotPart}>
        <div>
          <div className={styles.shadow}></div>
          <img src={H1} alt="image1" />
          <h3>پرینتر لیزری اچ پی مدل LaserJet Enterprise 700 printer M712dn</h3>
        </div>
        <div>
          <div className={styles.shadow}></div>
          <img src={H2} alt="image2" />
          <h3>پرینتر چند کاره لیزری اچ‌پی مدل M430f </h3>
        </div>
        <div>
          <div className={styles.shadow}></div>
          <img src={H3} alt="image3" />
          <h3>اچ پی لیزرجت پرو 400 کالر MFP M475dw</h3>
        </div>
        <div>
          <div className={styles.shadow}></div>
          <img src={H4} alt="image4" />
          <h3> پرینتر چندکاره لیزری کانن مدل imageclass MF3010</h3>
        </div>
        <div>
          <div className={styles.shadow}></div>
          <img src={H5} alt="image5" />
          <h3>پرینتر جوهرافشان کانن مدل PIXMA iX6840 </h3>
        </div>
      </div>
    </div>
  );
}
