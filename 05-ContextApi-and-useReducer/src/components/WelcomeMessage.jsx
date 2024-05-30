import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>
        All tasks are complete, enjoy your day !!!
      </p>
    )
  );
};

export default WelcomeMessage;
