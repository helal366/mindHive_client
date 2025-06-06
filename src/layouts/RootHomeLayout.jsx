import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/headerComponents/Navbar";
import Footer from "../components/foooterComponents/Footer";
import Loading from "../components/Loading";

const RootHomeLayout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="padding">
            <Outlet />
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default RootHomeLayout;
