import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code - create a side effect to run a callback function after 1 second
  useEffect(() => {
    //decrease the amount of time remaining by 1 every 1 second
    const timer = setTimeout(() => {
      setTimeRemaining(last => last-1)
    }, 1000)

//third deliverable
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered = false;
    }
// cleanup function to clean up the setTimeout async function that is running in the background
    return function cleanup() {
      clearTimeout(timer);
    };

  }, [])

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
