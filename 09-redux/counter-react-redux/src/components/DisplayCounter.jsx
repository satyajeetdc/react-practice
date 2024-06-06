import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);

  return <h2 className="lead mb-4">Count value : {counter}</h2>;
};

export default DisplayCounter;
