import React, {  useReducer, state, useContext } from 'react';
import { children, createContext } from "react";
import questions from '../data'
import {shuffleAnswers} from "../helpers"

const initialState = {
    currentQuestionIndex: 0,
    questions,
    showResults: false,
    answers: shuffleAnswers(questions[0]),
    currentAnswer : '',
    correctAnswersCount: 0,
};

const reducer = (state, action) => {
    console.log('reducer', state, action)

    switch(action.type){

        case "SELECT_ANSWER": {
            const correctAnswersCount = action.payload === state.questions
            [state.currentQuestionIndex].correctAnswer ? 
            state.correctAnswersCount + 1 : state.correctAnswersCount
            return{
                ...state,
                currentAnswer: action.payload,
                correctAnswersCount
            }
        }

        case "NEXT_QUESTION": {
            const showResults = 
            state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex +1; 
            const answers = showResults 
            ? [] 
            : shuffleAnswers(state.questions[currentQuestionIndex]);
            return {...state, 
                currentQuestionIndex,
            showResults,
            answers,
            currentAnswer: "",
        }
    };

        case "RESTART": {
            return initialState;
          }
        default: {
            return state;
        }
        
    }

    // if(action.type === 'RESTART'){
    //     return initialState;
    // };
    // if(action.type === 'NEXT_QUESTION'){
    //     const showResults = 
    //     state.currentQuestionIndex === state.questions.length - 1;
    //     const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex +1; 
    //     const answers = showResults 
    //     ? [] 
    //     : shuffleAnswers(state.questions[currentQuestionIndex]);
    //     return {...state, 
    //         currentQuestionIndex,
    //     showResults,
    //     answers,
    // };
    // }
    // return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({ children}) => {
    const value = useReducer(reducer, initialState);
    console.log('render', value);
    return <QuizContext.Provider value= {value}>{children}</QuizContext.Provider>;
}