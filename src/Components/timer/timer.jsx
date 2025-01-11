import { useState, useEffect } from 'react';
import './timer.css';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [show, setShow] = useState(true);


  useEffect(() => {
    const targetDate = new Date(2025, 0, 13, 0, 0, 0);
    const interval = setInterval(() => {
      const now = new Date();
      console.log(now);
      console.log(targetDate);
      const distance = targetDate.getTime() - now.getTime();

      if (distance < 60) {
        setShow(false);
        clearInterval(interval);
      } else {
        setShow(true);
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        setDays(days);
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(hours);
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        setMinutes(minutes);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>

    {show && <div className="timer">
      <p className='heading-text'>GOING LIVE IN...</p>
      <div className="inner-container">
      <div className="box">
        <div className='value'>
          {days}
        </div>
        <div className='key'>
          DAYS
        </div>
      </div>
      <div className="box">
        <div className='value'>
          {hours}
        </div>
        <div className='key'>
          HOURS
        </div>
      </div>
      <div className="box">
        <div className='value'>
          {minutes}
        </div>
        <div className='key'>
          MINUTES
        </div>
      </div>
      </div>
    </div>}

  </>;
};

export default Timer;
