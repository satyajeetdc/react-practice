import React from "react";
import style from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <>
      <li className={`${style["foodItems"]} list-group-item`}>
        <span className={`${style["customSpan"]}`}>{foodItem}</span>
      </li>
    </>
  );
};

export default Item;
