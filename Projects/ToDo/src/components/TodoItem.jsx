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
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
