import React, { useEffect, useState } from "react";
import "./App.css";
import { getDetails } from "./Services/service";
import { QuestionType } from "./Types/types";
import QuestionCard from "./Components/questionCard";
// import CircularProgress from "@material-ui/core/";
import SelectCard from "./Components/selectCard";
import Footer from "./Components/Footer";
import Heading from './Images/giphy.gif';
import IMG from './Images/Loading.gif';
function App() {
  // Quiz State
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [step, setStep] = useState(0);
  let [score, setScore] = useState(0);
  let [questions, setQuestions] = useState(5);
  let [level, setLevel] = useState("easy");
  let [category, setCategory] = useState(9);
  let [showResult, setShowResult] = useState(false);
  let [inputSubmitted, setInputSubmitted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const totalQuestions: QuestionType[] = await getDetails(
        questions,
        category,
        level
      );
      setQuiz(totalQuestions);
    }
    fetchData();
  }, [questions, category, level]);

  // Create handleSubmit function
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion: QuestionType = quiz[step];

    if (userAns === currentQuestion.answer) {
      setScore(++score);
    }

    if (step !== quiz.length - 1) {
      setStep(++step);
    } else {
      setShowResult(true);
    }
  };

  // Create handleInputSubmit function
  const handleInputSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setInputSubmitted(true);
  };

  // Handle Try again
  const handleTryAgain = () => {
    window.location.reload();
  };

  // Loading
  if (!quiz.length) {
    return (
      <div className="spinner-container">
        <img src={IMG} alt='loading' style={{width:'50vw', height:'55vh'}}></img>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="App">
        <header>
          <div className="header">
            <div className="main-heading">QUIZ APP </div>
          </div>
        </header>
        <div className="content">
          <div className="question-container result-container">
            <div>
              <h1>Result</h1>
            </div>
            <p className="result-text">
              {" "}
              Your score is : <b>{score}</b> out of <b>{quiz.length}</b>
              <br />
              Percentage : <b>{(score / quiz.length) * 100}%</b>
            </p>
            <input
              type="button"
              onClick={handleTryAgain}
              className="submit-btn"
              value="Try Again"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <header>
        <div className="header">
        <h1 className="main-heading"><img alt='heading' src={Heading} style={{height:'6vh'}}></img></h1>
        </div>
        {/* <hr /> */}
      </header>
      <div className="content">
        {inputSubmitted ? (
          <QuestionCard
            options={quiz[step].options}
            question={quiz[step].question}
            callback={handleSubmit}
            totalQuestions={quiz.length}
            currentQuestion={step}
          />
        ) : (
          <SelectCard
            questions={questions}
            setQuestions={setQuestions}
            level={level}
            category={category}
            setCategory={setCategory}
            setLevel={setLevel}
            callback={handleInputSubmit}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;