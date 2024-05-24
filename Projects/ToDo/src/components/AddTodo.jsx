function AddTodo() {
  return (
    <>
      <div class="container">
        <div class="row custom-row">
          <div class="col-6">
            <input type="text" placeholder="Enter your task" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2" style={{ display: "flex" }}>
            <button type="button" class="btn btn-success custom-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
