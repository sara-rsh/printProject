// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from "react";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
} from "../../../node_modules/react-icons/fa";

import styles from "./banner.module.css";

// import backgroundImage1 from '../../assets/api.naghshealmas.png';
// import backgroundImage2 from '../../assets/print24-Keyvisual_mobile_030622_FF_m8jkhs.webp';
import backgroundImage1 from "../../assets/bg1.jpeg";
import backgroundImage2 from "../../assets/bg2.jpeg";
import backgroundImage3 from "../../assets/bg3.jpeg";
import backgroundImage7 from "../../assets/bg7.jpeg";
import backgroundImage6 from "../../assets/bg6.jpeg";
// import { SlSizeActual, SlSizeFullscreen } from 'react-icons/sl';

function Banner() {
  const backgrounds = [backgroundImage1, backgroundImage2 , backgroundImage3 , backgroundImage7 ,backgroundImage6];

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const nextBackground = () => {
    setCurrentBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
  };

  const prevBackground = () => {
    setCurrentBackgroundIndex(
      (prev) => (prev - 1 + backgrounds.length) % backgrounds.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextBackground();
    }, 3000);
    return () => clearInterval(intervalId);
  });

  return (
    <div id="banner" className={styles.banner}>
      <div className={styles.news}>
        <h3>اطلاعیه</h3>
        <div>
          <h4>عنوان</h4>
          <p>
            تغییر در زیر ساخت های چاپخانه به اطلاع می رسانیم به دلیل تغییر در
            زیر ساخت های چاپخانه و متریال های استفاده شده در چاپخانه زین پس جهت
            استفاده از رنگ مشکی برای پس زمینه از کد رنگی C85.M70.Y65.K100استفاده
            نمایید{" "}
          </p>
          <p>۱۴۰۲/0۱/0۹ </p>
        </div>
      </div>
      <div className={styles.changingBanner}>
        <img src={backgrounds[currentBackgroundIndex]} alt="banner" />
        <FaArrowCircleRight
          onClick={nextBackground}
          className={styles.nextBtn}
        />
        <FaArrowCircleLeft
          onClick={prevBackground}
          className={styles.prevBtn}
        />
      </div>
    </div>
  );
}
export default Banner;
