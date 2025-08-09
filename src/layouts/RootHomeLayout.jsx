import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/headerComponents/Navbar";
import Footer from "../components/foooterComponents/Footer";
import Loading from "../components/Loading";

const RootHomeLayout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  return (
    <section className="relative">
      <section className="sticky top-0 z-50 bg-white">
        <Navbar />
      </section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section
            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)`, backgroundSize: "8px 8px", backgroundRepeat: 'repeat' }}
            className="padding min-h-screen">
            <Outlet />
          </section>
        </>
      )}

      <Footer />
    </section>
  );
};

export default RootHomeLayout;
