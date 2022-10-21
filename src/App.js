
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main'
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

import QuizDetails from './components/QuizDetails/QuizDetails';



function App() {

  const router = createBrowserRouter([
    {path: '/' , element: <Main></Main>, 
    children:[
      
      {path: '/' ,
        loader: async () =>{

         return fetch('https://openapi.programming-hero.com/api/quiz');
        },
      
      element: <Home></Home>},
      {
        path:'/quiz/:quizId',
        loader: async ({params}) => {
            //console.log(params.quizId)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <QuizDetails></QuizDetails>
      },
      {path: '/statistics' , 
      loader: async () =>{

        return fetch('https://openapi.programming-hero.com/api/quiz');
       },
      element: <Statistics></Statistics>},
      {path: '/blog' , element: <Blog></Blog>}
    ]},
        
    {path: '*' , element: <h1> Sorry, This Route not Found!!!</h1>}
     
        
       
        
      ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
