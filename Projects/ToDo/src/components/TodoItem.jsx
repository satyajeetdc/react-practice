import { AiTwotoneDelete } from "react-icons/ai";

function TodoItem1({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger custom-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <AiTwotoneDelete style={{ fontSize: "20px", lineHeight: "5px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
