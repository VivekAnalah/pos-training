import React, { useState, useEffect } from 'react';
import "../Style/timer.css"

const Timer3 = () => {
  const twelveHoursInSeconds = 12 * 60 * 60;
  const [timeRemaining, setTimeRemaining] = useState(twelveHoursInSeconds);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const startTime = localStorage.getItem('startTime');
    const elapsedTime = localStorage.getItem('elapsedTime');

    if (startTime && elapsedTime) {
      const storedTimeRemaining = twelveHoursInSeconds - Math.floor((Date.now() - parseInt(startTime, 10)) / 1000);
      setTimeRemaining(Math.max(0, storedTimeRemaining));
    }

    const intervalId = setInterval(() => {
      if (!document.hidden) {
        setTimeRemaining((prevTime) => {
          if (prevTime > 0) {
            const newTimeRemaining = prevTime - 1;
            localStorage.setItem('startTime', Date.now().toString());
            localStorage.setItem('elapsedTime', (twelveHoursInSeconds - newTimeRemaining).toString());
            return newTimeRemaining;
          } else {
            clearInterval(intervalId);
            
            // For every user => need authentication =>  =>        
            // On closing the tab need to add the timings to backend =>
            // PPt should be in backend =>

            
            //  
            return 0;
          }
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Helper function to format seconds into HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // setHours(hours)
    // setMinutes(minutes)
    // setSeconds(remainingSeconds)
    const formatNumber = (number) => (number < 10 ? `0${number}` : number);

    const h = formatNumber(hours);
    const m = formatNumber(minutes);
    const s = formatNumber(remainingSeconds);

    // setHours(h)

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(remainingSeconds)}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time Remaining: {formatTime(timeRemaining)}</p>
      <div >

      {/* <section class="timeContainer">
  <div class="wrapper">
    
    <div class="hours">
      <h2 id="hours">{hours}</h2>
    </div>
    <div class="minutes">
      <h2 id="minutes">{minutes}</h2>
    </div>
    <div class="seconds">
      <h2 id="seconds">{seconds}</h2>
    </div>
  </div>
</section>

        <div style={{width: "50px", height: "50px", border: "1px solid red"}}>
            <p></p>
            <p>50</p>
        </div>

        <div>
            <p></p>
        </div>

        <div>
            <p></p>
        </div> */}



      </div>
    
      <p></p>
    </div>
  );
};

export default Timer3;
