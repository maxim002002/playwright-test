import { useState, useRef, useEffect } from "react";

export const Timer = () => {
  const count = useRef();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [isStart, setIsStart] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const addSeconds = () => setSeconds((prev) => prev - 1);
  const addMinutes = () => setMinutes((prev) => prev - 1);

  useEffect(() => {
    if (seconds === 0) {
      setSeconds(60);
      if (isStart) addMinutes();
      if (minutes === 0) resetTimer();
    }
    if (seconds === 59 && isStart) addMinutes();
  }, [seconds]);

  const handleTimer = () => {
    setIsDirty(true);
    setIsStart((prev) => !prev);
    if (!isStart) {
      count.current = setInterval(() => {
        if (seconds === 0) setSeconds(59);
        addSeconds();
      }, 1000); // поменять на 1000
    } else {
      clearInterval(count.current);
    }
  };

  const resetTimer = () => {
    clearInterval(count.current);
    setIsStart(false);
    setIsDirty(false);
    setSeconds(0);
    setMinutes(25);
  };

  const abs = (x) => Math.abs(x);
  const renderSeconds = () => {
    const sec = abs(seconds)
    return sec  < 10 ? `0${sec}` : `${sec}`;
  };
  const renderMinutes = () => {
    const min = abs(minutes)
    return min < 10 ? `0${min}` : `${min}`;
  };

  return (
    <div style={{ marginRight: "150px" }}>
      <span>{isStart ? "Идет отсчет" : "Остановлено"}</span>
      <br />
      <span>
        {renderMinutes()}:{!isDirty || seconds === 60 ? "00" : renderSeconds()}
      </span>
      <button onClick={() => handleTimer()}>START | STOP</button>
      <button onClick={() => resetTimer()}>-----Reset------</button>
    </div>
  );
};
