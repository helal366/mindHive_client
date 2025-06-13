import React from "react";
import { FaCircle, FaCookie } from "react-icons/fa";

const CookiePolicy = () => {
  return (
    <div id="cookie" className="mb-8">
      <h2 className="text-xl font-semibold mb-2 flex items-start gap-3">
        <FaCookie /> Cookie Policy:
      </h2>
      <p className="mb-1">
        <span>
          <b>Effective Date: </b>{" "}
        </span>
        <span>29th April,2005</span>
      </p>
      <p className="mb-4 text-justify">
        Cookies are small text files stored on your device that help us remember
        your preferences and improve performance.
      </p>

      <h3 className="font-medium text-lg">1. What Are Cookies?</h3>
      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} /> Cookies are small text files
        stored on your device that help us remember your preferences and improve
        performance.
      </p>

      <h3 className="font-medium text-lg">2. Types of Cookies We Use</h3>
      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} />
        <span>
          <b>Essential Cookies: </b>{" "}
        </span>
        <span>
          Necessary for the site to function (e.g., login session).
        </span>
      </p>

      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} />
        <span>
          <b>Performance Cookies: </b>{" "}
        </span>
        <span>
          Help us understand how users interact with the site.
        </span>
      </p>
      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} />
        <span>
          <b>Functional Cookies: </b>{" "}
        </span>
        <span>
          Store user preferences and settings.
        </span>
      </p>

      <h3 className="font-medium text-lg">3. Managing Cookies</h3>
      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} /> You can manage or disable cookies through your
         browser settings. Note that disabling cookies may impact site functionality.
      </p>

      <h3 className="font-medium text-lg">4. Third-Party Cookies</h3>
      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} /> We may use cookies from trusted partners such as 
        irebase or analytics tools (e.g., Google Analytics) to analyze usage patterns.
      </p>
    </div>
  );
};

export default CookiePolicy;
