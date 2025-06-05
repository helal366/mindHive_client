import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarCenter from "./NavbarCenter";
import NavbarStart from "./NavbarStart";
import NavbarEnd from "./NavbarEnd";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm padding">
      <NavbarStart></NavbarStart>
      <NavbarCenter></NavbarCenter>
      <NavbarEnd></NavbarEnd>
    </div>
  );
};

export default Navbar;
