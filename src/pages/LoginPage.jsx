import React, { useEffect } from "react";
import SocialLogin from "../components/loginRegisterComponents/SocialLogin";
import { Link, useNavigate } from "react-router";
import EmailPassword from "../components/loginRegisterComponents/EmailPassword";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import SignUpOne from "../lotties/one/signupOne";
import {motion} from "motion/react"

const LoginPage = () => {
  useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  const navigate = useNavigate();
  const { userLogin } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then(() => {
        toast.success(`You logged in successfully.`);
        navigate("/");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-row-reverse">
          <div className="hidden lg:block">
            <SignUpOne></SignUpOne>
          </div>
          <div className="card bg-base-100 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl glass">
            <div className="card-body ">
              <form onSubmit={handleLogin}>
                <motion.h2
                initial={{ scale: 1 }}
                  animate={{
                    scale: [1,1.05,1,0.95,1],
                    transition: { duration: 3, repeat: Infinity },
                  }}
                className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-5">
                  Please Login Here!
                </motion.h2>
                <fieldset className="fieldset">
                  <EmailPassword />
                  <button
                    type="submit"
                    className="btn bg-base-content text-base-100 hover:bg-base-300 hover:text-base-content mt-2"
                  >
                    Login
                  </button>
                  <SocialLogin />
                  <p className="mt-2">
                    Not Registered Yet? Please{" "}
                    <Link
                      to="/auth/register"
                      className="text-blue-600 underline cursor-pointer"
                    >
                      Register.
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
