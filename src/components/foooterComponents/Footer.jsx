import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-base-300 text-base-content pt-10 pb-20 padding">
      <nav className="flex flex-col justify-between mb-6 sm:mb-0">
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
      <nav className="flex flex-col gap-3 ">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms and Conditions</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav className="flex flex-col gap-3 mt-6 lg:mt-0">
        <h6 className="footer-title">Company</h6>
        <Link to='https://mind-hive-9313b.web.app/about-us' className="link link-hover">About us</Link>
        <Link  className="link link-hover">Contact us</Link>
        <Link to='https://mind-hive-9313b.web.app/all-articles' className="link link-hover">Articles</Link>
      </nav>
      <nav className="flex flex-col items-start lg:items-end justify-start lg:justify-end gap-3 mt-6 lg:mt-0">
        <h6 className="footer-title">Follow us</h6>
        <div className="grid grid-flow-col gap-4">
          <Link to='https://x.com/'>
            <FaTwitter size={26} />
          </Link>
          <Link to='https://www.youtube.com/'>
            <FaYoutube size={26} />
          </Link>
          <Link to='https://www.facebook.com/'>
            <FaFacebookF size={24} />
          </Link>
          <Link to='https://www.linkedin.com/'>
            <FaLinkedinIn size={26} />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
