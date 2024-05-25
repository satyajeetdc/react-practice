import React from "react";
import styles from "./ButtonsConatiner.module.css";

const ButtonsConatiner = () => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonName.map((item) => (
        <button className={styles.button}>{item}</button>
      ))}
    </div>
  );
};

export default ButtonsConatiner;
