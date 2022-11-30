import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useToken from "../../../hooks/useToken";
import useSeller from "../../../hooks/useSeller";

const Navbar = () => {
  const { providerLogin } = useContext(AuthContext);

  const { user, logOut } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [googleUserEmail, setGoogleUserEmail] = useState("");
  const [token] = useToken(googleUserEmail);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  // googleProvider login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        const email = user.email;
        const name = user.displayName;
        console.log(name, email);
        saveUser(name, email);
      })
      .catch((error) => console.error(error));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
        setGoogleUserEmail(email);
      });
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {isSeller && (
        <li>
          <Link to="/allnewproducts">My Products</Link>
        </li>
      )}
      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Sign out</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}

      {user?.uid ? (
        <>
          <div></div>
        </>
      ) : (
        <li tabIndex={0}>
          <div className="justify-between ">
            Account Type
            <svg
              className="fill-current "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </div>
          <ul className="p-2 z-10  bg-white">
            <li>
              <Link to="/signupseller">Seller</Link>
            </li>
            <li>
              <Link to="/signup">Buyer</Link>
            </li>
          </ul>
        </li>
      )}

      {user?.uid ? (
        <>
          <div></div>
        </>
      ) : (
        <li>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline rounded-lg"
          >
            Login With Google
          </button>
        </li>
      )}

      {/* <li>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline rounded-lg"
        >
          Login With Google
        </button>
      </li> */}
    </>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={1} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
          Bookworm
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden "
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
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
