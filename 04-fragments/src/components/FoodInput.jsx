import React from "react";
import style from "./FoodInput.module.css";

const FoodInput = () => {
  const formInputHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <input
      className={style.foodInput}
      type="text"
      placeholder="Search..."
      onChange={(e) => formInputHandler(e)}
    />
  );
};

export default FoodInput;
