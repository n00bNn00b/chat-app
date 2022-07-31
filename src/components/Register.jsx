import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/chat");
  }
  if (error) {
    //
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
    e.target.reset();
  };

  return (
    <div className="card w-96 bg-base-100 shadow-2xl flex mx-auto my-20">
      <div className="card-body">
        <h2 className="card-title">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="email"
            className="input w-full max-w-xs bg-gray-50"
            name="email"
          />
          <input
            type="password"
            placeholder="password"
            className="input w-full max-w-xs bg-gray-50 my-3"
            name="password"
          />
          <input
            className="btn btn-primary flex mx-auto"
            type="submit"
            value="Register"
          />
          <p>
            Already Have an account?{" "}
            <span>
              <Link className="text-blue-500" to="/login">
                Login
              </Link>{" "}
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
