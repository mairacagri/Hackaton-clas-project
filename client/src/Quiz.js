import React, { useEffect, useState } from "react";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [fetchNextQuestion, setFetchNextQuestion] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [answerRes, setAnswerRes] = useState(null);
  const [score, setScore] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/getNextQuestion", {
      method: "GET",
      headers: {
        userId: userId,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.score) {
          setScore(data.score);
          return;
        }
        if (!userId) setUserId(data.userId);
        setCurrentQuestion(data);
        setAnswerRes(null);
        setUserId(data.headers.userId);
        console.log(data.headers);
      });
  }, [userId, fetchNextQuestion]);

  async function checkAnswer(answerId) {
    fetch(
      `http://localhost:4000/api/v1/checkAnswer/${currentQuestion.id}/${answerId}?userId=${userId}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setAnswerRes(data);
      });
  }

  const triggerFetchNextQuestion = () => {
    setFetchNextQuestion(!fetchNextQuestion);
  };
  const checkAnswerHandler = async (answer) => {
    await checkAnswer(answer);
  };
  return (
    <>
      {currentQuestion && (
        <Quiz
          currentQuestion={currentQuestion}
          answerRes={answerRes}
          checkAnswerHandler={checkAnswerHandler}
          fetchNext={triggerFetchNextQuestion}
        />
      )}
      {score && <p>Your score is {score}</p>}
    </>
  );
};

const Quiz = ({
  currentQuestion,
  checkAnswerHandler,
  fetchNext,
  answerRes,
}) => {
  const [selected, setSelected] = useState(null);
  const onChangeValue = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div onChange={onChangeValue}>
      <p>{currentQuestion.question}</p>
      {currentQuestion.answers.map((answer, i) => (
        <label
          key={i}
          for={answer}
          style={{
            backgroundColor:
              answerRes && answerRes.correct && answerRes.userAnswer == i
                ? "green"
                : answerRes && !answerRes.correct !== i && answerRes.userAnswer == i
                ? "red"
                : "none",
          }}
        >
          <input
            type="radio"
            value={i}
            id={i}
            name={currentQuestion.question}
          />
          {answer}
        </label>
      ))}
      <button onClick={() => checkAnswerHandler(selected)}>Check Answer</button>
      <button onClick={fetchNext}>Next Question</button>
    </div>
  );
};

export default QuizApp;
