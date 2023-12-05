import React, { useEffect, useState } from 'react';
// import "../Assets"
const TimerComponent = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  const isScreenOn = () => {
    // Implement your logic to check if the screen is on
    // This example uses a simple mouse move event
    return true; // Replace with your actual logic
  };

  useEffect(() => {
    let startTimestamp;
    const storedTimestamp = localStorage.getItem('timerStartTimestamp');
    if (storedTimestamp) {
      startTimestamp = parseInt(storedTimestamp, 10);
    } else {
      startTimestamp = Date.now();
      localStorage.setItem('timerStartTimestamp', startTimestamp.toString());
    }

    const intervalId = setInterval(() => {
      if (isScreenOn()) {
        const currentTimestamp = Date.now();
        const elapsed = Math.floor((currentTimestamp - startTimestamp) / 1000);

        setElapsedTime(elapsed);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* <p>Elapsed Time: {elapsedTime} seconds</p> */}
      <iframe src="" frameborder="0" style={{width: "100%", height:"600px"}}></iframe>
    </div>
  );
};



export default TimerComponent;
