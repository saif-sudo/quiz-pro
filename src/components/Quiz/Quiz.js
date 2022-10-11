import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'
const Quiz = ({home}) => {
    const {name,logo,id} = home
    return (
        <div className='quiz'>
            <h3>Name: {name}</h3>
            <p>Id: {id}</p>
            <p>Email: {logo}</p>

            <Link to={`/quiz/${id}`}>Start Quiz</Link>
            
        </div>
    );
};

export default Quiz;