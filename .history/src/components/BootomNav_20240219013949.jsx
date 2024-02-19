import { Link, useLocation, useNavigate } from "react-router-dom";

const BootomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <>
      <div className="btm-nav mt-20">
        <Link
          to="/home"
          className={
            location.pathname === "/home"
              ? "active bg-pink-200 text-pink-600"
              : "bg-pink-200 text-pink-600"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">Home</span>
        </Link>
        <Link
          to="/home/price"
          className={
            location.pathname === "/home/price"
              ? "active bg-blue-200 text-blue-600 border-blue-600"
              : "bg-blue-200 text-blue-600 border-blue-600"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="btm-nav-label">Package </span>
        </Link>
        <Link
          to="/home/customplan"
          className={
            location.pathname === "/home/customplan"
              ? "active bg-teal-200 text-teal-600"
              : "bg-teal-200 text-teal-600"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="btm-nav-label">Custom </span>
        </Link>
        <button
          onClick={handleLogOut}
          className={
            location.pathname === "/"
              ? "active bg-pink-200 text-pink-600"
              : "bg-pink-200 text-pink-600"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="btm-nav-label">Logout</span>
        </button>
      </div>
    </>
  );
};

export default BootomNav;
