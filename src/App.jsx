import { RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Price from './pages/Price';
import Login from './pages/Login';
import Main from './pages/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/price",
        element: <Price />,
      }
    ]
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} >
        <Home />
        <ScrollRestoration />
      </RouterProvider>
    </>
  )
}

export default App
