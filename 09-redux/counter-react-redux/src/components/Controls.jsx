import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handleMinus = () => {
    dispatch({
      type: "MINUS",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handlePrivacyToogle = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          Add 1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrement}
        >
          Minus 1
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handlePrivacyToogle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          className="number-input"
          placeholder="Enter a number"
          ref={inputElement}
        />

        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleMinus}
        >
          Minus
        </button>
      </div>
    </>
  );
};

export default Controls;
