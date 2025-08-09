import React from "react";
import { FaCircle } from "react-icons/fa";
import TermsAndConditions from "../components/aboutUsComponents/TermsAndConditions";
import PrivacyPolicy from "../components/aboutUsComponents/PrivacyPolicy";
import OurMission from "../components/aboutUsComponents/OurMission";
import WhatYouCanDo from "../components/aboutUsComponents/WhatYouCanDo";
import WhyItMatters from "../components/aboutUsComponents/WhyItMatters";
import CookiePolicy from "../components/aboutUsComponents/CookiePolicy";
import ContactUs from "../components/aboutUsComponents/ContactUs";
import { Helmet } from "react-helmet-async";
// import { useEffect } from "react";

const AboutUsPage = () => {
  // useEffect(()=>{
  //     window.scrollTo(0,0)
  // },[])
  return (
    <section className="bg-base-200 py-10 my-10 rounded-lg shadow-2xl px-6 text-sm text-gray-800">
      <Helmet>
        <title>mindHive | About Us</title>
      </Helmet>
      <h2 className="mb-2 text-xl font-semibold">
        Welcome to mindHive — your go-to platform for student-led learning,
        collaboration, and idea exchange.
      </h2>
      <p className="mb-4">
        In today’s fast-paced educational world, we believe that students thrive
        best when they learn not just from textbooks, but from one another.
        That’s why we built mindHive — a dynamic, user-driven Knowledge Sharing
        Platform created with one goal in mind: to empower students to share
        knowledge, post insightful articles, and engage in meaningful
        discussions.
      </p>

      <div className="grid grid-cols-1  xl:grid-cols-3 xl:gap-10  mb-10 bg-gray-100 p-5 rounded-xl">
        <OurMission />
        <WhatYouCanDo />
        <WhyItMatters />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 md:gap-y-10 xl:gap-x-20  bg-gray-100 p-5 rounded-xl">
        {/* terms and conditions */}
        <TermsAndConditions />

        {/* privacy policy */}
        <PrivacyPolicy />
        {/* cookie policy */}
        <CookiePolicy />
        {/* contact us */}
        <ContactUs />
      </div>
    </section>
  );
};

export default AboutUsPage;
