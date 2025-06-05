import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const NavbarDropdown = () => {
  const {user, userLogout}=useAuth();
  const userEmail=user?user.email:'';
  const handleLogout=()=>{
    userLogout()
    .then(()=>{
      toast.success('You logged out successfully.')
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li>
          <p className="justify-between">
            Email: {userEmail}
          </p>
        </li>
        <li>
          <NavLink to="/my-articles" className="justify-between">
            My Articles
          </NavLink>
        </li>
        <li>
          <NavLink to='/post-article'>Post Article</NavLink>
        </li>
        <li>
          <button onClick={handleLogout} className="py-1 w-full flex justify-center">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDropdown;
