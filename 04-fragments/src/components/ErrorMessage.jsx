import React from "react";

const ErrorMessage = ({ items, errMsg }) => {
  return <>{items.length === 0 && <p>{errMsg}</p>}</>;
};

export default ErrorMessage;
