import React from 'react';

import { Link } from 'react-router-dom';
import './Quiz.css'
const Quiz = ({home}) => {
    const {name,logo,id} = home
    return (

       
        <div className='quiz'>
            <h3>{name}</h3>
           
        <img className='logo' src={logo} alt="logo"  /><br/>
           

            <Link className="quizbtn" to={`/quiz/${id}`}>Start Quiz</Link>
            
        </div>
        
       
       
    );
};

export default Quiz;