import React, { useState } from "react";
import Answer from "./Answer";

const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const MathQuiz = () => {
  const [a, setA] = useState(generateRandomNumber());
  const [b, setB] = useState(generateRandomNumber());
  const [score, setScore] = useState(0);

  const updatePoints = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setA(generateRandomNumber());
    setB(generateRandomNumber());
  };

  return (
    <div className="math-quiz">
      <h1>MathQuiz:)</h1>
      <p>
        Сколько будет {a} + {b}?
      </p>
      <Answer a={a} b={b} updatePoints={updatePoints} />
      <p>Верных ответов: {score}</p>
    </div>
  );
};

export default MathQuiz;