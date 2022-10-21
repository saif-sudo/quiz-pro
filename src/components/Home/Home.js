import React from 'react';

import { useLoaderData } from 'react-router-dom';

import  '../Header/Header.css'
import Quiz from '../Quiz/Quiz';


const Home = () => {
    const homes = useLoaderData().data;

    console.log(homes.id , "quiz topic");
    
    
    return (

       


        <div className="mainbody">
      
            <img className='headerimg' src="https://img.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg?w=2000" alt="quiz"  />
            <h3>Welcome To Quiz-Pro</h3>
            <p>This is a Quiz Related Site - Everyone need this for test</p>
        <div className="quizsection">
        {
               

               homes.map(home => <Quiz
                   key={home.id}
                   home={home}
               ></Quiz>)

              


           }
           

        </div>
    
          

       
        </div>
    );
};

export default Home;