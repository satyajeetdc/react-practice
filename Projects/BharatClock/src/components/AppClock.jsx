import React, { useEffect, useState } from "react";

const AppClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="appClock">
      <h1>{time.toLocaleTimeString()}</h1>
      <h5>{time.toDateString()}</h5>
    </div>
  );
};

export default AppClock;
