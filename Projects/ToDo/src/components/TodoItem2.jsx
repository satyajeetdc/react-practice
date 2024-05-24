function TodoItem2() {
  let todoName = "Wash Bike";
  let todoDate = "24/05/24";
  return (
    <div class="container">
      <div class="row custom-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger custom-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
