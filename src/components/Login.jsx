import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-2xl flex mx-auto my-20">
      <div className="card-body">
        <h2 className="card-title">Login</h2>
        <form>
          <input
            type="text"
            placeholder="email"
            className="input w-full max-w-xs bg-gray-50"
          />
          <input
            type="text"
            placeholder="password"
            className="input w-full max-w-xs bg-gray-50 my-3"
          />
          <input
            className="btn btn-primary flex mx-auto"
            type="button"
            value="Login"
          />
          <p>
            Don't have an account?{" "}
            <span>
              {" "}
              <Link className="text-blue-500" to="/register">
                Register
              </Link>{" "}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
