import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  // handler function
  // handler function
  const loginHandler = (e) => {
    e.preventDefault();
    if (email == "admin@admin.com" && pass == "admin") {
      localStorage.setItem("email", email);
      navigate("/home/price");
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <>
      <div className="hero bg-base-100 login-cotainer">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginHandler} className="card-body">
              <h1 className="text-center text-2xl">Login Here</h1>
              <div className="border-bottom"></div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <br />
              <div>
                Email: admin@admin.com <br />
                Pass: admin
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary login-button">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
