import React, { useState } from 'react';
import './AllQuestions.css';
import { BsEyeFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllQuestions = ({quiz}) => {
    const {/*id,*/correctAnswer,options,question} = quiz;
    const [formData , setformData] = useState({
           // isAgree = false,
            gender: ""
    })
function myfunc(){
    alert("hello world")
}

const handleChange = event => {
    const target = event.target
   
    //const id = target.id
    const value = target.value
    if(value === options[0]){
        if(value === correctAnswer){
            alert(`${value}  is correct answer`);
        }else{
            alert(`${value}  is wrong answer`);
        }
    
    } if(value === options[1]){
        if(value === correctAnswer){
            alert(`${value}  is correct answer`);
        }else{
            alert(`${value}  is wrong answer`);
        }
    
    } if(value === options[2]){
        if(value === correctAnswer){
            alert(`${value}  is correct answer`);
        }else{
            alert(`${value}  is wrong answer`);
        }
    
    } if(value === options[3]){
        if(value === correctAnswer){
            alert(`${value}  is correct answer`);
        }else{
            alert(`${value}  is wrong answer`);
        }
    
    }
   
  }

return (
       <form>
        <div>
           
             <div className='allquiz'>
            <h4>Question: {question.replace(/(<([^>]+)>)/ig, '')} &nbsp;  &nbsp;  &nbsp; </h4>
           <span onClick={()=>{toast(`The correct answer is: ${correctAnswer} `)}}><BsEyeFill/></span> 
          
          <h5 className='options'> 
         
          <div className='optionsDesign' >  
          <input  type="radio"  name="gender" value={options[0]} onChange={handleChange}/> <label >{options[0]}</label> <br/>
          <input type="radio"   name="gender" value={options[1]} onChange={handleChange}/> <label >{options[1]}</label> 
          <input  type="radio"  name="gender" value={options[2]} onChange={handleChange}/> <label >{options[2]}</label> <br/>
          <input type="radio"   name="gender" value={options[3]} onChange={handleChange}/> <label >{options[3]}</label> 
         
          <ToastContainer />
          </div>
         
         
        
         
  
          
           </h5>

           
    
      
         
   
    
   

            
            
        </div>
        </div>

        </form>
    );
};

export default AllQuestions;