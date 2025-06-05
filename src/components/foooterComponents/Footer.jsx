import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 padding">
      <nav>
        <p className="hidden lg:block text-xl font-semibold">
          <i>mindHive</i>
        </p>
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} <br /> All right reserved by{" "}
          <b>
            <i>mindHive</i>
          </b>
        </p>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaTwitter size={26} />
          </a>
          <a>
            <FaYoutube size={26} />
          </a>
          <a>
            <FaFacebookF size={24} />
          </a>
          <a>
            <FaLinkedinIn size={26} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
