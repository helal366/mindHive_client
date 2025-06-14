import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const NavbarDropdown = () => {
  const navigate=useNavigate();
  const { user, userLogout } = useAuth();
  const daisyImage =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
  const userImage = user ? user?.photoURL : daisyImage;
  const handleLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire({
            title: "You logged out successfully.",
            icon: "success",
            timer: 2000,
            draggable: true,
          });
          navigate('/')
      })
      .catch((err) => {
        toast.error(err.message)
      });
  };
  return (
    <div className="dropdown dropdown-end z-30">
      <div tabIndex={0} role="button" className="btn btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt={user?.name} src={userImage} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 min-w-52 p-2 shadow-xl"
      >
        <li >
          <NavLink to="/my-articles" className="justify-between">
            <span className="text-gray-700">My Articles</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/post-article">
          Post Article
          </NavLink>
        </li>
        <li>
          <p className="justify-between">{user?.email}</p>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="py-1 w-full flex justify-center"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDropdown;
