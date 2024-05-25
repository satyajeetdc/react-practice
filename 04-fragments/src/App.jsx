import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

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
    <Container>
      <h1 className="heading">Healthy Food</h1>
      <ErrorMessage items={healthyFoodList} errMsg={errorMessage} />
      <FoodItems items={healthyFoodList} />
    </Container>
  );
}

export default App;
