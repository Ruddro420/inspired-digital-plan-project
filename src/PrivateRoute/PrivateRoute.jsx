/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userEmail = localStorage.getItem("email");

  if (userEmail) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
