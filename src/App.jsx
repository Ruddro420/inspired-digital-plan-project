// App.js
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom';
import './App.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Preloader from './components/Preloader'; // Import your Preloader component
import BookOrder from './pages/BookOrder';
import Corporate from './pages/Corporate';
import CustomPlan from './pages/CustomPlan';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Others from './pages/Others';
import Price from './pages/Price';
import Basic from './plans/Basic';
import Company from './plans/Company';
import Enterprise from './plans/Enterprise';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/home',
        element: <Price />,
      },
      {
        path: '/home/price',
        element: <Price />,
      },
      {
        path: '/home/price/:id',
        element: <Basic />,
      },
      {
        path: '/home/book',
        element: <BookOrder />,
      },
      {
        path: '/home/company',
        element: <Company />,
      },
      {
        path: '/home/enterprise',
        element: <Enterprise />,
      },
      {
        path: '/home/customplan',
        element: <CustomPlan />,
      },
      {
        path: '/home/corporate',
        element: <Corporate />,
      },
      {
        path: '/home/others',
        element: <Others />,
      },
    ],

  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <RouterProvider router={router}>
          <ScrollRestoration />
          <Home />
          <Toaster />
          <ScrollRestoration />
        </RouterProvider>
      )}
    </>
  );
}

export default App;
