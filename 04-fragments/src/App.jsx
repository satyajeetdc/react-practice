import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [textToShow, setTextToShow] = useState();

  let [healthyFoodList, setHealthyFoodList] = useState([
    "Green Veggies",
    "Salad",
    "Fruits",
    "Whole Wheat flour",
  ]);

  const errorMessage = "The list is empty";

  // console.log(`Current value of text: ${textToShow}`);

  const formInputHandler = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      e.target.value = "";
      let newItems = [...healthyFoodList, newFoodItem];
      setHealthyFoodList(newItems);
      // console.log(newFoodItem);
    }
    // console.log(e.target.value);
    setTextToShow(e.target.value);
  };

  return (
    <Container>
      <h1 className="heading">Healthy Food</h1>
      <FoodInput formInputHandler={formInputHandler} />
      <ErrorMessage items={healthyFoodList} errMsg={errorMessage} />
      <FoodItems items={healthyFoodList} />
    </Container>
  );
}

export default App;
