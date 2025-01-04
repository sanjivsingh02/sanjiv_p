
import React from 'react';
import { FaHome, FaUser, FaBox, FaBriefcase, FaPhone } from 'react-icons/fa';

const FloatingNavBar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#2d3b4c] to-[#151C28] p-4 rounded-full shadow-xl flex justify-around w-80 sm:w-96 md:w-[500px] lg:w-[600px] xl:w-[700px]">
      <a
        href="#home"
        className="text-[#E3E4E8] hover:text-[#F6A800] transition-colors duration-300"
        aria-label="Home"
      >
        <FaHome size={24} />
      </a>
      <a
        href="#about"
        className="text-[#E3E4E8] hover:text-[#F6A800] transition-colors duration-300"
        aria-label="About"
      >
        <FaUser size={24} />
      </a>
      <a
        href="#projects"
        className="text-[#E3E4E8] hover:text-[#F6A800] transition-colors duration-300"
        aria-label="Projects"
      >
        <FaBox size={24} />
      </a>
      <a
        href="#experience"
        className="text-[#E3E4E8] hover:text-[#F6A800] transition-colors duration-300"
        aria-label="Experience"
      >
        <FaBriefcase size={24} />
      </a>
      <a
        href="#contact"
        className="text-[#E3E4E8] hover:text-[#F6A800] transition-colors duration-300"
        aria-label="Contact"
      >
        <FaPhone size={24} />
      </a>
    </div>
  );
};

export default FloatingNavBar;
