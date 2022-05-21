import React, {useEffect, useState } from "react";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [fetchNextQuestion, setFetchNextQuestion] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [answerChecked, setAnswerChecked] = useState(false);
  const [score, setScore] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/api/v1/getNextQuestion', {
      method: 'GET',
      headers: {
        userId: userId,
      }
    }).then(response => response.json())
    .then(data => {
      if (data.score) {
        setScore(data.score);
        return
      }
      setCurrentQuestion(data);
      setUserId(data.userId);
    })
  }, [userId, fetchNextQuestion]);
  const triggerFetchNextQuestion = () => {
    setFetchNextQuestion(!fetchNextQuestion);

  }
  const checkAnswer = () => {
    setAnswerChecked(true);
  }
  return (
    <>
      {currentQuestion && <Quiz currentQuestion={currentQuestion} answerChecked={answerChecked} 
      fetchNext={triggerFetchNextQuestion} checkAnswer={checkAnswer} />}
      {score && <p>Your score is {score}</p>}
    </>
  )
}

const Quiz = ({ currentQuestion, checkAnswer, fetchNext, answerChecked }) => {
  console.log(currentQuestion)
    return (
      <div>
        <p>{currentQuestion.question}</p>
        {currentQuestion.answers.map((answer, i) =>
          <label key={i} for={answer} style={{backgroundColor: answerChecked && currentQuestion.correct === i ? 'green' : answerChecked && currentQuestion.correct !== i ? 'red' : 'none'}}>
            <input type="radio" id={currentQuestion.question} name={currentQuestion.question} />
            {answer}
          </label>
        )}
        <button onClick={checkAnswer}>Check Answer</button>
        <button onClick={fetchNext}>Next Question</button>
      </div>
    );
};

export default QuizApp;
