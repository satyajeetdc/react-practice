import React from "react";
import style from "./Item.module.css";

const Item = ({ foodItem }) => {
  const buyHandler = (event) => {
    console.log(`${foodItem} is being bought`);
    console.log(event);
  };
  return (
    <>
      <li className={`${style["foodItems"]} list-group-item`}>
        <span className={`${style["customSpan"]}`}>{foodItem}</span>
        <button
          className={`${style.button} btn btn-success`}
          onClick={(event) => buyHandler(event)}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
