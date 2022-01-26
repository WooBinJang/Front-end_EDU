import React, { useEffect, useState } from "react";

export default function App() {
  const [day, setDay] = useState("0000.00.00.000");
  const [timer, setTimer] = useState("00:00:00");

  const currentTimer = () => {
    const date = new Date();
    const year = date.getFullYear(); // 년
    const week = date.getDate().toString().padStart(2, "0"); // 일
    let day = ""; // 요일
    if (date.getDay() === 0) {
      day = "Sun";
    } else if (date.getDay() === 1) {
      day = "Mon";
    } else if (date.getDay() === 2) {
      day = "Tue";
    } else if (date.getDay() === 3) {
      day = "Wed";
    } else if (date.getDay() === 4) {
      day = "Thu";
    } else if (date.getDay() === 5) {
      day = "Fri";
    } else if (date.getDay() === 6) {
      day = "Sat";
    }
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월
    const hour = date.getHours().toString().padStart(2, "0"); // 시
    const min = date.getMinutes().toString().padStart(2, "0"); // 분
    const sec = date.getSeconds().toString().padStart(2, "0"); //초
    setDay(`${year}.${month}.${week}.${day}`);
    setTimer(`${hour}:${min}:${sec}`);
  };

  useEffect(() => {
    currentTimer();
  }, []);

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  return (
    <div className="Timer">
      <h1>{day}</h1>
      <h2>{timer}</h2>
    </div>
  );
}
