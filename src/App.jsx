import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/home/Home';
import CodingPage from './pages/coding/Coding';
import ArtWork from './pages/artwork/ArtWork';
import ErrorPage from './pages/error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Coding",
    element: <CodingPage />,
  },
  {
    path: "/ArtWork",
    element: <ArtWork />,
  }

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
