import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/chat");
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    //
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
    e.target.reset();
  };

  return (
    <div className="card w-96 bg-base-100 shadow-2xl flex mx-auto my-20">
      <div className="card-body">
        <h2 className="card-title">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="email"
            name="email"
            className="input w-full max-w-xs bg-gray-50"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input w-full max-w-xs bg-gray-50 my-3"
          />
          <input
            className="btn btn-primary flex mx-auto"
            type="submit"
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
