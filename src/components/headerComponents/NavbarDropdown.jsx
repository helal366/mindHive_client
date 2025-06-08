import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const NavbarDropdown = () => {
  const { user, userLogout } = useAuth();
  console.log(user)
  const daisyImage =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
  const userImage = user ? user?.photoURL : daisyImage;
  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.success("You logged out successfully.");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message)
      });
  };
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt={user?.name} src={userImage} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 min-w-52 p-2 shadow-xl"
      >
        <li>
          <NavLink to="/my-articles" className="justify-between">
            My Articles
          </NavLink>
        </li>
        <li>
          <NavLink to="/post-article">Post Article</NavLink>
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
