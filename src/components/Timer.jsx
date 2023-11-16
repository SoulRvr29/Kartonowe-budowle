import { useState, useEffect } from "react";

const Timer = () => {
  const date = new Date();
  let hours = date.getHours();
  if (hours <= 9) hours = "0" + hours;
  let minutes = date.getMinutes();
  if (minutes <= 9) minutes = "0" + minutes;
  let seconds = date.getSeconds();
  if (seconds <= 9) seconds = "0" + seconds;

  const [time, setTime] = useState(hours + ":" + minutes);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let hours = date.getHours();
      if (hours <= 9) hours = "0" + hours;
      let minutes = date.getMinutes();
      if (minutes <= 9) minutes = "0" + minutes;
      let seconds = date.getSeconds();
      if (seconds <= 9) seconds = "0" + seconds;
      setTime(hours + ":" + minutes);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer relative transition-all font-bold dark:font-medium text-white dark:text-accent-2 dark:text-opacity-80 text-opacity-100 max-md:text-xl text-2xl tracking-widest max-sm:text-base font-digit drop-shadow-[1px_1px_0px_rgba(0,0,0,0.2)]">
      {time}
      <div className="absolute top-0 left-0 opacity-20 ">00:00</div>
    </div>
  );
};

export default Timer;
