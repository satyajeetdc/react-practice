import React from "react";
import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <>
      <li className={`${styles.foodItems} list-group-item`}>
        <span className={`${styles.customSpan}`}>{foodItem}</span>
      </li>
    </>
  );
};

export default Item;
