import styles from "./about.module.css";
import React from "react";
import { FcAbout } from "react-icons/fc";
import AboutPic from "../../assets/about.jpeg";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.topAbout}>
        <FcAbout className={styles.AboutIcon} />
        <h1>درباره شرکت</h1>
      </div>
      <div className={styles.about}>
        <div className={styles.aboutPic}>
          <img src={AboutPic} alt="AboutPic" />
        </div>
        <div className={styles.aboutContent}>
          <h1>درباره شرکت مجتمع piurim</h1>
          <p>
            تمرکز مجتمع چاپ نقش الماس در حیطه فرم‌های عمومی و ارائه محصول‌های
            متنوع و با کـیفیت در این زمـینه است. این مجـتمع به عنوان یک واحـد
            تخصـصی در زمیـنه چاپ افسـت فعالیـت کرده و از این رو فاقـد آتـلیه
            طراحی می‌باشد.با توجـه به این مطلـب مـی توان نتیجـه گـرفت که روند
            انجـام خـدمات در مجـتمع چـاپ نقـش الماس مـناسـب برای چاپخانه‌ها،
            دفـاتر، مراکـز و کانون‌های تبلیـغاتی و بازاریابان محـترم صنـعت چاپ
            بوده و بهتر آنـست که سایـر مشـاغل غیر مرتبط، مشـاوره و طراحـی و
            آماده سـازی سفـارشـات را به آتـلیه‌های طراحـی و کـانون‌های تبلیغ‌های
            بـسپارند.
          </p>
          <span>ادامه مطالب</span>
        </div>
      </div>
    </div>
  );
}

export default About;
