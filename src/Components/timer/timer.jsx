import { useState, useEffect } from 'react';
import './timer.css';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0); // Added state for seconds
  const [show, setShow] = useState(true);

  useEffect(() => {
    const targetDate = new Date(2025, 2, 27, 0, 0, 0);
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();

      if (distance < 0) {
        setShow(false);
        clearInterval(interval);
      } else {
        setShow(true);

        // Calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        setDays(days);

        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(hours);

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(minutes);

        const seconds = Math.floor((distance % (1000 * 60)) / 1000); // Calculate seconds
        setSeconds(seconds);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {show && (
        <div className="timer">
          <p className="heading-text">GOING LIVE IN...</p>
          <div className="inner-container">
            <div className="box">
              <div className="value">{days}</div>
              <div className="key">DAYS</div>
            </div>
            <div className="box">
              <div className="value">{hours}</div>
              <div className="key">HOURS</div>
            </div>
            <div className="box">
              <div className="value">{minutes}</div>
              <div className="key">MINUTES</div>
            </div>
            <div className="box"> {/* Added seconds box */}
              <div className="value">{seconds}</div>
              <div className="key">SECONDS</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;
