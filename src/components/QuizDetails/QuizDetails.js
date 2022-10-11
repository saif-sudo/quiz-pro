import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuestions from '../AllQuestions/AllQuestions';
//import AllQuestions from '../AllQuestions/AllQuestions';

const QuizDetails = () => {
    const  quizes = useLoaderData().data.questions;

    console.log(quizes , "details");
    return (
        <div>
            <h2>All Questions</h2>

            {
                quizes.map(quiz => <AllQuestions
                    key={quiz.id}
                    quiz={quiz}
                ></AllQuestions>)
            }
            


            
        </div>
    );
};

export default QuizDetails;