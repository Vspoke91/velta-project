import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import '../styles/App.css';
import HomePage from '../pages/Home'
import CodingPage from '../pages/Coding'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CodingPage/>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
