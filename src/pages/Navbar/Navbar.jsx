import { Link, NavLink } from "react-router-dom";
import userPhotoUrl from "../../assets/user.png";

import logoUrl from "../../assets/logo-light.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/career">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/career">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className=" max-w-6xl mx-auto navbar bg-base-100">
        <img className="bg-green-400 h-10 rounded-sm p-1" src={logoUrl} alt="" />
      <div className=" navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu bg-transparent menu-sm hover:text-green-400 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu bg-transparent hover:text-green-400 menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={userPhotoUrl} />
          </div>
        </label>
        <Link to="/login" className="btn bg-green-400 text-white">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
