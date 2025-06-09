import React, { useEffect, useState } from "react";
import NamePhotoURL from "./../components/loginRegisterComponents/NamePhotoURL";
import EmailPassword from "../components/loginRegisterComponents/EmailPassword";
import SocialLogin from "../components/loginRegisterComponents/SocialLogin";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import SignUpOne from "../lotties/one/signupOne";
import { motion } from "motion/react";
// import { motion } from "motion/react";
// import { toast } from "react-toastify";

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { userCreate, userUpdate } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordRegEx = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    setErrorMessage("");
    if (!passwordRegEx.test(password)) {
      setErrorMessage(
        "Password must have minimum six characters including minimum one uppercase letter and minimum one lowercase letter"
      );
      return;
    }
    const updatedDec = {
      displayName: name,
      photoURL: photo,
    };
    userCreate(email, password)
      .then(() => {
        
        userUpdate(updatedDec)
          .then(() => {
            toast.success(`You have been registered successfully.`);
            navigate("/");
            form.reset();
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
         toast.error(err.message);
      });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="hidden lg:block">
            <SignUpOne></SignUpOne>
          </div>

          <div className="card bg-base-100 w-full mx-auto my-10 max-w-sm shrink-0 drop-shadow-2xl ">
            <div className="card-body ">
              <form onSubmit={handleRegister}>
                <motion.h2
                  initial={{ scale: 1 }}
                  animate={{
                    scale: [1,1.05,1,0.95,1],
                    transition: { duration: 3, repeat: Infinity },
                  }}
                  className="text-xl md:text-2xl lg:text-3xl text-center font-semibold mb-5"
                >
                  Please Register Here!
                </motion.h2>
                <fieldset className="fieldset">
                  <NamePhotoURL />
                  <EmailPassword />
                  <button
                    type="submit"
                    className="btn bg-base-content text-base-100 hover:bg-base-300 hover:text-base-content mt-2"
                  >
                    Register
                  </button>
                  {errorMessage && (
                    <p className="text-red-500">{errorMessage}</p>
                  )}
                  <SocialLogin />
                  <p className="mt-2">
                    Already have an account ? Please{" "}
                    <Link
                      to="/auth/login"
                      className="text-blue-600 underline cursor-pointer"
                    >
                      Login.
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

export default RegisterPage;
