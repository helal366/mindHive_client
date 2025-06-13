import React from "react";
import { FaCircle, FaLock } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div id="privacy" className="mb-8">
      <h2 className="text-xl font-semibold mb-2 flex items-start gap-3">
        <FaLock /> Privacy Policy:
      </h2>
      <p className="mb-1">
        <span>
          <b>Effective Date: </b>{" "}
        </span>
        <span>29th April,2005</span>
      </p>
      <p className="mb-4 text-justify">
        By accessing or using our website and services, you agree to comply with
        and be bound by the following terms and conditions.
      </p>

      <h3 className="font-medium text-lg">1. Information We Collect</h3>
      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} />
        <span>
          <b>Information We Collect: </b>{" "}
        </span>
      </p>
        <span>
          When you register via Firebase, we may collect your name, email
          address, and profile image.
        </span>

      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} />
        <span>
          <b>Usage Data: </b>{" "}
        </span>
      </p>
        <span>
          Includes articles read, interactions, device info, IP address, and
          browser type.
        </span>

      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} />
        <span>
          <b>Cookies: </b>{" "}
        </span>
      </p>
        <span>
          We use cookies to enhance user experience (see Cookie Policy).
        </span>

      <h3 className="font-medium text-lg mt-3">2. How We Use Your Information</h3>
      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} /> To personalize and improve the
        user experience.
      </p>
      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} /> To communicate with you about
        updates or support.
      </p>
      <p className="flex items-start gap-2 text-justify mb-3">
        <FaCircle className="mt-1" size={8} /> To monitor usage and ensure
        platform security.
      </p>

      <h3 className="font-medium text-lg">3. Data Sharing and Disclosure</h3>
      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} /> We do not sell your personal
        data.
      </p>
      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} /> We may share data with service
        providers (e.g., Firebase, analytics tools) to improve the platform.
      </p>
      <p className="flex items-start gap-2 text-justify mb-3">
        <FaCircle className="mt-1" size={8} /> We may disclose information when
        legally required.
      </p>

      <h3 className="font-medium text-lg">4. Data Security</h3>
      <p className="flex items-start gap-2 text-justify">
        <FaCircle className="mt-1" size={8} /> Your data is stored securely
        using Firebase Authentication and secure databases (MongoDB).
      </p>
      <p className="flex items-start gap-2 text-justify mb-3">
        <FaCircle className="mt-1" size={8} /> While we strive to protect your
        data, no method of transmission is 100% secure.
      </p>

      <h3 className="font-medium text-lg">5. Your Rights</h3>
      <p className="flex items-start gap-2 text-justify mb-3">
        <FaCircle className="mt-1" size={8} /> You can request access to or
        deletion of your personal data by contacting us at [Insert Contact
        Email].
      </p>
    </div>
  );
};

export default PrivacyPolicy;
