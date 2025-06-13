import React from "react";
import { FaMobile, FaPhoneVolume } from "react-icons/fa";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div id="contact">
      <h2 className="text-xl font-semibold mb-5 flex items-start gap-3">
        <FaPhoneVolume /> Contact Us
      </h2>

      {/* office */}
      <div className="mb-5">
        <h4 className="flex items-center gap-2 mb-2">
          <HiBuildingOffice />
          <p>
            <b>Office: </b>
          </p>
        </h4>
        <p>
          45, Arambag, Commercial Area, 12/7/A, Udayan Tower, Motijheel,
          Dhaka-1205
        </p>
      </div>


      {/* mobile */}
      <div className="mb-5">
        <h4 className="flex items-center gap-2 mb-2">
          <FaMobile />
          <span>
            <b>Mobile: </b>
          </span>
        </h4>
        <p>01788111000,</p> 
        <p>01788111222,</p> 
        <p>01788111333</p>
      </div>


      {/* email */}
      <div >

      <h4 className="flex items-center gap-2 mb-2">
        <MdEmail />
        <span>
          <b>Email: </b>
        </span>
      </h4>
      <span>support@mindhive.com</span> <br />
      <span>admin@mindhive.com</span> <br />
      <span>customer@mindhive.com</span>
      </div>
    </div>
  );
};

export default ContactUs;
