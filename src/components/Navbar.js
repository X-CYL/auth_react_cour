
import React, { useContext }from "react";
import { UserContext } from "./context/UserContext";
import { Link } from "react-router-dom";
export default function Navbar() {

  const { toggleModals } = useContext(UserContext);

  return (
    <nav className="navbar navbar-light bg-info px-4">
      <Link to="/" navbar="navbar-brand">
        AuthJS
      </Link>
      <div>
        <button 
        onClick={() => toggleModals("signUp")}
        className="button.btn btn-primary">Sign Up</button>
        <button 
        onClick={() => toggleModals("signIn")}
        className="button.btn btn-primary ms-2">Sign In</button>
        <button 
        className="button.btn btn-danger ms-2">Log Out</button>
      </div>
    </nav>
  );
}
