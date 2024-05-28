import React from "react";
import style from "./FoodInput.module.css";

const FoodInput = ({ formInputHandler }) => {
  return (
    <input
      className={style.foodInput}
      type="text"
      placeholder="Search..."
      onKeyDown={(e) => formInputHandler(e)}
    />
  );
};

export default FoodInput;
