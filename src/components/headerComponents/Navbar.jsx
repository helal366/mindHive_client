import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarCenter from "./NavbarCenter";
import NavbarStart from "./NavbarStart";
import NavbarEnd from "./NavbarEnd";
import Loading from "../Loading";
import { useNavigation } from "react-router";

const Navbar = () => {
  const navigation=useNavigation();
  const loading=navigation.state==='loading'
  return (
    <>
    {
      loading?<Loading/>:<div className="navbar bg-base-300/50 shadow-sm padding">
        <NavbarStart></NavbarStart>
        <NavbarCenter></NavbarCenter>
        <NavbarEnd></NavbarEnd>
      </div>
    }
      
    </>
  );
};

export default Navbar;
