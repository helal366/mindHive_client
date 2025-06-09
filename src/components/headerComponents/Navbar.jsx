import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarCenter from "./NavbarCenter";
import NavbarStart from "./NavbarStart";
import NavbarEnd from "./NavbarEnd";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading";

const Navbar = () => {
  const { loading } = useAuth();
  return (
    <>
    {
      loading?<Loading/>:<div className="navbar bg-base-300 shadow-sm padding">
        <NavbarStart></NavbarStart>
        <NavbarCenter></NavbarCenter>
        <NavbarEnd></NavbarEnd>
      </div>
    }
      
    </>
  );
};

export default Navbar;
