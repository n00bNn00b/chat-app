import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Chat App
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            {!user ? (
              <Link to="/login">Login</Link>
            ) : (
              <button onClick={signOut(auth)}>Logout</button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
