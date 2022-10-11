import React from 'react';
import './AllQuestions.css';

const AllQuestions = ({quiz}) => {
    const {options,question} = quiz;
 
    return (
        <div>
             <div className='allquiz'>
            <h4>Question: {question}</h4>
          <h5 className='options'> Options: <input id="one" type="radio" name="options"/><label for="one">{options[0]}</label> <br/>
           <input id="two" type="radio" name="options"/><label for="two">{ options[1]}</label> <br/>
           <input id="three" type="radio" name="options"/> <label for="three">{options[2]}</label> <br/>
           <input id="four" type="radio" name="options"/> <label for="four">{options[3]}</label> </h5>

           
    
      
         
   
    
   

            
            
        </div>
        </div>
    );
};

export default AllQuestions;