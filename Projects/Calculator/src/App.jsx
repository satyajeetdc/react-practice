import styles from "./App.module.css";
import ButtonsConatiner from "./components/ButtonsConatiner";
import Display from "./components/Display";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsConatiner />
    </div>
  );
}

export default App;
