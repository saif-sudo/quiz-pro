
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';


function App() {
  const router = createBrowserRouter([
        {path: '/' , element: <div>This is default page</div>},
        {path: '/home' , element: <Home></Home>},
        {path: '/statistics' , element: <Statistics></Statistics>},
        {path: '/blog' , element: <Blog></Blog>}
       
     
        
       
        
      ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
