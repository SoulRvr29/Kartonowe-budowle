import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState("00 : 00");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let hours = date.getHours();
      if (hours <= 9) hours = "0" + hours;
      let minutes = date.getMinutes();
      if (minutes <= 9) minutes = "0" + minutes;

      setTime(hours + ":" + minutes);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="timer transition-all font-bold dark:font-medium text-text-dark dark:text-text-light dark:text-opacity-20 text-opacity-50 max-md:text-xl text-2xl tracking-widest max-sm:text-base">
      {time}
    </div>
  );
};

export default Timer;
