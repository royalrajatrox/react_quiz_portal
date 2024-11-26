import React from 'react';
import { children, createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children}) => {
    return <QuizContext.Provider value= "foo">{children}</QuizContext.Provider>;
}