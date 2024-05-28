import React from "react";
import style from "./Item.module.css";

const Item = ({ foodItem, bought, buyHandler }) => {
  return (
    <>
      <li
        className={`${style["foodItems"]} list-group-item ${
          bought && "active"
        }`}
      >
        <span className={`${style["customSpan"]}`}>{foodItem}</span>
        <button
          className={`${style.button} btn btn-success`}
          onClick={buyHandler}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
