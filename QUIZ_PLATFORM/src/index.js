import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Quiz from './components/Quiz';
import {QuizProvider} from "./contexts/quiz"

ReactDOM.render(

    <QuizProvider>
    <Quiz />
    {/* this is the major component */}
    </QuizProvider>
  ,
  document.getElementById("root")
);