import "./App.css";
import AppClock from "./components/AppClock";
import AppPromo from "./components/AppPromo";
import AppTitle from "./components/AppTitle";

function App() {
  return (
    <center>
      <AppTitle />
      <AppPromo />
      <AppClock />
    </center>
  );
}

export default App;
