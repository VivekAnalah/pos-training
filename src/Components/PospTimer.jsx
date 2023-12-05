import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Load start time from localStorage on component mount
  useEffect(() => {
    const storedStartTime = localStorage.getItem('startTime');
    if (storedStartTime) {
      setStartTime(parseInt(storedStartTime, 10));
      setIsTimerRunning(true);
    }
  }, []);

  // Save start time to localStorage when the timer starts
  useEffect(() => {
    if (isTimerRunning) {
      localStorage.setItem('startTime', startTime.toString());
    }
  }, [isTimerRunning, startTime]);

  // Update elapsed time every second when the timer is running
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, startTime]);

  // Handle visibility change (user switches tabs or closes the browser)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Save elapsed time when the user switches tabs or closes the browser
        localStorage.setItem('elapsedTime', elapsedTime.toString());
        setIsTimerRunning(false);
      } else {
        // Restore elapsed time and start the timer again when the user comes back
        const storedElapsedTime = localStorage.getItem('elapsedTime');
        if (storedElapsedTime) {
          setElapsedTime(parseInt(storedElapsedTime, 10));
          setStartTime(Date.now() - parseInt(storedElapsedTime, 10));
          setIsTimerRunning(true);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [elapsedTime]);

  const handleStartStop = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
    } else {
      setStartTime(Date.now() - elapsedTime);
      setIsTimerRunning(true);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('startTime');
    localStorage.removeItem('elapsedTime');
    setStartTime(0);
    setElapsedTime(0);
    setIsTimerRunning(false);
  };

  return (
    <div>
      <p>Elapsed Time: {Math.floor(elapsedTime / 1000)} seconds</p>
      <button onClick={handleStartStop}>{isTimerRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>

      
    </div>
  );
};

export default Timer;
