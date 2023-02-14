import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import '../styles/App.css';
import HomePage from '../pages/Home';
import CodingPage from '../pages/Coding';
import ArtWorkPage from '../pages/ArtWork';
import ErrorPage from '../pages/ErrorPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/Coding",
      element: <CodingPage/>,
    },
    {
      path: "/ArtWork",
      element: <ArtWorkPage/>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
