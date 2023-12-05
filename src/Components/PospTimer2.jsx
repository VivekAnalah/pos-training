import React, { useState, useEffect } from 'react';

const Timer2 = () => {
  const twelveHoursInSeconds = 12 * 60 * 60;
  const [timeRemaining, setTimeRemaining] = useState(twelveHoursInSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(intervalId);
          // You may add additional logic when the timer reaches 0
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Helper function to format seconds into HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formatNumber = (number) => (number < 10 ? `0${number}` : number);

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(remainingSeconds)}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time Remaining: {formatTime(timeRemaining)}</p>
    </div>
  );
};

export default Timer2;



