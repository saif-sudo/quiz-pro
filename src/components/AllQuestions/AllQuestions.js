import React from 'react';

const AllQuestions = ({quiz}) => {
    const {options,question} = quiz;
  console.log(quiz,"hello details")
    return (
        <div>
             <div className='allquiz'>
            <h3>Question: {question}</h3>
           <p>Options: {options}</p>

            
            
        </div>
        </div>
    );
};

export default AllQuestions;