import React from "react";
import styles from "./BackDrop.module.css";

const BackDrop = ({children}) => {

  return (
    <div className={styles.backDrop}>
      {children}
    </div>
  );
}

export default BackDrop;
