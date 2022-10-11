
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Main from './layout/Main';
import QuizDetails from './components/QuizDetails/QuizDetails';


function App() {
  const router = createBrowserRouter([
    {path: '/' , element: <Main></Main>, children:[
      {path: '/' , element: <Home></Home>},
      {path: '/home' ,
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
      {path: '/statistics' , element: <Statistics></Statistics>},
      {path: '/blog' , element: <Blog></Blog>}
    ]},
        
    {path: '*' , element: <h1>This Route not Found!!!</h1>}
     
        
       
        
      ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
