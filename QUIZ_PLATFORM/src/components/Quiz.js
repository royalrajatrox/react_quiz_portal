import React, {  state, useContext } from 'react';
import Question from './Question'
import { QuizContext } from "../contexts/quiz";




const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log('quizState : ', quizState)

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

        {quizState.showResults &&(
            <div className='results'>
                <div className='congratulations'>Congratulations!</div>
                <div className='results-info'>
                    <div>You have completed the QUIZ.</div>
                    <div>You have got {quizState.correctAnswersCount} out of {quizState.questions.length}</div>
                </div>
                <div className='next-button' onClick={() => dispatch({type: "RESTART"})}>
                    Restart</div>
            </div>
        )}



           {!quizState.showResults &&( <div>
                <div className='score'>Question {quizState.currentQuestionIndex + 1}/
                    {quizState.questions.length}</div>
            <Question/>
            <div className='next-button' onClick={() => dispatch({type: "NEXT_QUESTION"})}>Next Question </div>
                                                                        {/* {state.currentQuestionIndex} */}
            </div>
            )};
        </div>
    
    );
};
export default Quiz;



// redux responsible for single flow of data inside the application