import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Quiz from './components/Quiz';
import {QuizProvider} from "./contexts/quiz"

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
    <Quiz />
    {/* this is the major component */}
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);




