import {
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Sgraphics from "./ServicePlan/Sgraphics";
import BookOrder from "./pages/BookOrder";
import CustomPlan from "./pages/CustomPlan";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Basic from "./plans/Basic";
import Company from "./plans/Company";
import Enterprise from "./plans/Enterprise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        {" "}
        <Main />
      </PrivateRoute>
    ),
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
        element: <Company />,
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
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Home />
        <ScrollRestoration />
      </RouterProvider>
    </>
  );
}

export default App;
