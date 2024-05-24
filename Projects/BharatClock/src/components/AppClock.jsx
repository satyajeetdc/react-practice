import React from "react";

const AppClock = () => {
  let time = new Date();

  return (
    <div className="appClock">
      <h1>{time.toLocaleTimeString()}</h1>
      <h5>{time.toDateString()}</h5>
    </div>
  );
};

export default AppClock;
