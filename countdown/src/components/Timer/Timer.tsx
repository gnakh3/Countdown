import { useEffect, useState } from "react";
import TimerDesign from "../TimerDesign/TimerDesign";

const Timer = () => {
  const calculateSecondsLeft = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);
    const diff = Math.floor((nextYear.getTime() - now.getTime()) / 1000);
    return diff > 0 ? diff : 0;
  };

  const [totalSeconds, setTotalSeconds] = useState(calculateSecondsLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds(calculateSecondsLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="flex sm:gap-8 gap-4">
      <TimerDesign value={days} label="DAYS" />
      <TimerDesign value={hours} label="HOURS" />
      <TimerDesign  value={minutes} label="MINUTES" />
      <TimerDesign  value={seconds} label="SECONDS" />
    </div>
  );
};

export default Timer;
