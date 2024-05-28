import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";

function App() {
  let healthyFoodList = [
    "Green Veggies",
    "Salad",
    "Fruits",
    "Whole Wheat flour",
    "Water",
    "Milk",
  ];

  const errorMessage = "The list is empty";

  return (
    <Container>
      <h1 className="heading">Healthy Food</h1>
      <ErrorMessage items={healthyFoodList} errMsg={errorMessage} />
      <FoodInput />
      <FoodItems items={healthyFoodList} />
    </Container>
  );
}

export default App;
