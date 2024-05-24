import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let healthyFoodList = [
    "Green Veggies",
    "Salad",
    "Fruits",
    "Whole flour",
    "Water",
    "Milk",
  ];

  const errorMessage = "The list is empty";

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ErrorMessage items={healthyFoodList} errMsg={errorMessage} />
      <FoodItems items={healthyFoodList} />
    </React.Fragment>
  );
}

export default App;
