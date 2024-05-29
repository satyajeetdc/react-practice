import { useState } from "react";
import { IoBagAdd } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddNewButton = (event) => {
    event.preventDefault();
    console.log(event);
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <div className="container">
        <form className="row custom-row" onSubmit={handleAddNewButton}>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter your task"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange} />
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
