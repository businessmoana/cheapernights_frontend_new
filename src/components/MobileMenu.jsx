import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const FaceBookIconUrl= "/assets/images/icons/facebook.png";
const XIconUrl= "/assets/images/icons/x.png";
const InstagramIconUrl= "/assets/images/icons/instagram.png";
const LinkedIconUrl= "/assets/images/icons/linked.png";
const YoutubeIconUrl= "/assets/images/icons/youtube.png";
const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-40 transform ${
        isOpen ? "translate-x-[25%]" : "translate-x-[125%]"
      } transition-transform duration-300 ease-in-out w-4/5 flex flex-col items-center`}
    >
      <div className="flex justify-end w-full p-4">
        <button onClick={onClose} className="text-2xl">
          <FaTimes className="w-[17px] h-[17px]" color="#57606F" />
        </button>
      </div>
      <ul className="flex flex-col items-center gap-6 mt-10 flex-1 justify-center">
        <li>
          <Link to="/" onClick={onClose} className="text-[#57606F] text-xl">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={onClose}
            className="text-[#57606F] text-xl"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={onClose} className="text-[#57606F] text-xl">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/help" onClick={onClose} className="text-[#57606F] text-xl">
            Help
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            onClick={onClose}
            className="text-[#57606F] text-xl"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="flex gap-[10px] justify-center items-center mb-[60px]">
        <a href="#"><img src={FaceBookIconUrl} alt="facebook"  className="w-[30px] h-[30px]"/></a>
        <a href="#"><img src={XIconUrl} alt="facebook"  className="w-[30px] h-[30px]"/></a>
        <a href="#"><img src={InstagramIconUrl} alt="facebook"  className="w-[30px] h-[30px]"/></a>
        <a href="#"><img src={LinkedIconUrl} alt="facebook"  className="w-[30px] h-[30px]"/></a>
        <a href="#"><img src={YoutubeIconUrl} alt="facebook"  className="w-[30px] h-[30px]"/></a>
      </div>
    </div>
  );
};

export default MobileMenu;
