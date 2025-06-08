import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider divider-success">Or</div>
      <button className="btn bg-base-content text-base-100 hover:bg-base-300 hover:text-base-content border-[#e5e5e5] w-full ">
        <FcGoogle size={24} />&nbsp;
        Login with Google
      </button>
      <div className="divider divider-error">Or</div>
      <button className="btn bg-base-content text-base-100 hover:bg-base-300 hover:text-base-content border-[#e5e5e5] w-full">
       <FaGithub size={24}/> &nbsp;
        Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
