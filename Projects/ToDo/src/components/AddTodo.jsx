import { useRef } from "react";
import { IoBagAdd } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddNewButton = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
  };

  return (
    <>
      <div className="container">
        <form className="row custom-row" onSubmit={handleAddNewButton}>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter your task"
              ref={todoNameElement}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-2" style={{ display: "flex" }}>
            <button className="btn btn-success custom-button">
              <IoBagAdd style={{ fontSize: "20px", lineHeight: "5px" }} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
