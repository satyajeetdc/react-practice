import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return <h2 className="lead mb-4">Count value : {counterVal}</h2>;
};

export default DisplayCounter;
