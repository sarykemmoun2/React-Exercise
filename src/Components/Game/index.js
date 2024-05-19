import React, { useEffect, useState } from "react";

const TIME = 60;
const Game = ({ title, answers, onAnswer, score }) => {
  const [timeElapsed, setTimeElapsed] = useState(TIME);

  useEffect(() => {
    setTimeElapsed(TIME);
    const interval = setInterval(() => {
      setTimeElapsed((timeElapsed) => timeElapsed - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [title]);

  useEffect(() => {
    if (timeElapsed === 0) {
      setTimeElapsed(TIME);
      onAnswer(-1);
    }
  }, [timeElapsed, onAnswer]);
  return (
    <div>
      <h1>{title}</h1>
      <h2>Score: {Number(score).toFixed()}%</h2>
      <h2>Time Elapsed: {timeElapsed}</h2>

      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => onAnswer(index)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
