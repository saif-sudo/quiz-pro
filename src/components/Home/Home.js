import React from 'react';
import { useLoaderData } from 'react-router-dom';

import  '../Header/Header.css'
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const homes = useLoaderData().data;
    console.log(homes , "quiz topic")
    
    return (
        <div>
      
            <img className='headerimg' src="https://img.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg?w=2000" alt="quiz"  />
            <h3>This is home: {homes.length}</h3>
            {
                homes.map(home => <Quiz
                    key={home.id}
                    home={home}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;