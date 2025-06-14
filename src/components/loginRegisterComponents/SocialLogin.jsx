import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";


const SocialLogin = () => {
  const navigate=useNavigate()
  const {googleLogin}=useAuth()
  const [loading, setLoading]=useState(false)
  const handleGoogleSignin=()=>{
    setLoading(true)
    googleLogin()
    .then(res=>{
      console.log(res);
      Swal.fire({
        icon: "success",
        title: "Google Login Successful",
        timer: 2000
      });
      navigate('/')
    })
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
  }
  
  return (
    <div>
      <div className="divider divider-success">Or</div>
      <button 
      onClick={handleGoogleSignin}
      className="btn bg-base-content text-base-100 hover:bg-base-300 hover:text-base-content border-[#e5e5e5] w-full ">
        <FcGoogle size={24} />&nbsp;
        {loading? 'Logging in...':'Login with Google'}   
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
