import React, { useState, useReducer } from 'react';
import Question from './Question'

const initialState = {
    currentQuestionIndex: 0,
    questions: [],
};

const reducer = (state, action) => {
    if(action.type === 'NEXT_QUESTION'){
        return {...state, currentQuestionIndex: state.currentQuestionIndex + 1}
    }
    return state;
};

const Quiz = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('render', state);
    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)  
    // This is a use state hook




    //state hook with object
    // const [state, setState] = useState({
    //     currentQuestionIndex: 0,
    //     questions: []

    // });
    // const testClick = () => {
    //     dispatch({type: "NEXT_QUESTION"});
    //     // setCurrentQuestionIndex(currentQuestionIndex +1);


    // //    setState({...state, 
    // //     currentQuestionIndex: state.currentQuestionIndex + 1});
    //  };
    return (
        <div className='quiz'>
            <div>
                <div className='score'>Question 1/8</div>
            <Question questions={state.questions}/>
            <div className='next-button' onClick={() => dispatch({type: "NEXT_QUESTION"})}>Next Question {state.currentQuestionIndex} </div>
                                                                        {/* {state.currentQuestionIndex} */}
            </div>
        </div>
    );
};
export default Quiz;



// redux responsible for single flow of data inside the application