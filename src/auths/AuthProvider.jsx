import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config.js";
import axios from "axios";
import { toast } from "react-toastify";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_API_URL;

  const userCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin=()=>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
  }
  const userUpdate = (updatedDec) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedDec);
  };
  const userLogout = () => {
    setLoading(true);
    localStorage.removeItem("token");
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser?.email) {
        axios
          .post(`${baseURL}/jwt`, {
            email: currentUser?.email,
          })
          .then((data) => {
            const token = data.data.token;
            localStorage.setItem("token", token);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      } else {
        localStorage.removeItem("token");
      }
    });
    return () => {
      unSubscribe();
    };
  }, [baseURL]);

  
  const authInfo = {
    auth,
    user,
    setUser,
    loading,
    setLoading,
    userCreate,
    googleLogin,
    githubLogin,
    userLogin,
    userUpdate,
    userLogout,
    baseURL,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
