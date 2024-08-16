import React, { useState } from "react";

const Answer = ({ a, b, updatePoints }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = a + b;
    const isCorrect = parseInt(userAnswer, 10) === correctAnswer;
    updatePoints(isCorrect);
    setUserAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        required
      />
      <button type="submit">Ответить</button>
    </form>
  );
};

export default Answer;