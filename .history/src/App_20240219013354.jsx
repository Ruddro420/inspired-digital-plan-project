import { RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Price from './pages/Price';
import Login from './pages/Login';
import Main from './pages/Main';
import Basic from './plans/Basic';
import BookOrder from './pages/BookOrder';
import Enterprise from './plans/Enterprise';
import Company from './plans/Company';
import CustomPlan from './pages/CustomPlan';
import Sgraphics from './ServicePlan/Sgraphics';

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
      },
      {
        path: "/home/basic",
        element: <Basic />,
      },
      {
        path: "/home/book",
        element: <BookOrder />,
      },
      {
        path: "/home/company",
        element: <Company/>,
      },
      {
        path: "/home/enterprise",
        element: <Enterprise />,
      },
      {
        path: "/home/customplan",
        element: <CustomPlan />,
      },
      {
        path: "/home/:title",
        element: <Sgraphics />,
      },
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
