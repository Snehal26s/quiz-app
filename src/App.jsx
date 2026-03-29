import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A database",
      "A programming language",
      "A backend framework"
    ],
    answer: "A JavaScript library for building user interfaces"
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    answer: "Facebook"
  },
  {
    question: "What is JSX?",
    options: [
      "Java Syntax Extension",
      "JavaScript XML",
      "Java Extra Syntax",
      "JSON XML"
    ],
    answer: "JavaScript XML"
  },
  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answer: "useState"
  },
  {
    question: "What are props in React?",
    options: [
      "A way to pass data to components",
      "A database",
      "A styling method",
      "A server request"
    ],
    answer: "A way to pass data to components"
  },
  {
    question: "Which hook is used for side effects?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: "useEffect"
  },
  {
    question: "What is a component in React?",
    options: [
      "Reusable piece of UI",
      "Database table",
      "CSS file",
      "Server API"
    ],
    answer: "Reusable piece of UI"
  },
  {
    question: "Which method is used to render React to the DOM?",
    options: [
      "ReactDOM.render()",
      "renderDOM()",
      "showReact()",
      "displayDOM()"
    ],
    answer: "ReactDOM.render()"
  },
  {
    question: "What is the Virtual DOM?",
    options: [
      "A real DOM element",
      "A lightweight copy of the real DOM",
      "A database",
      "A browser extension"
    ],
    answer: "A lightweight copy of the real DOM"
  },
  {
    question: "Which keyword is used to create a functional component?",
    options: ["function", "class", "component", "create"],
    answer: "function"
  }
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handleAnswer(option) {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  }

  return (
    <div className="container">
      <h2>React Quiz App</h2>

      {showResult ? (
        <div>
          <h3>Quiz Completed 🎉</h3>
          <p>
            Your Score: {score} / {questions.length}
          </p>
        </div>
      ) : (
        <div>
          <h3>Question {current + 1}</h3>
          <p>{questions[current].question}</p>

          {questions[current].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}