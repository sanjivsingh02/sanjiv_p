
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import imgs from '../assets/sanpic.webp';
import resume from '../assets/sanjiv_singh_cv.pdf';

const HeroSection = () => (
  <section
    id="about"
    className="min-h-screen bg-gradient-to-b from-[#151C28] to-[#2d3b4c] text-white flex flex-col items-center justify-center text-center px-6 py-16 relative"
  >
    {/* Social Links on the Left */}
    <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
      <a
        href="https://linkedin.com/in/sanjivsingh02"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F6A800] text-2xl hover:text-white transition-colors"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/sanjivsingh02"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F6A800] text-2xl hover:text-white transition-colors"
      >
        <FaGithub />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F6A800] text-2xl hover:text-white transition-colors"
      >
        <FaInstagram />
      </a>
    </div>

    {/* Heading Section */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F6A800] mb-4">
      Sanjiv Singh
    </h1>
    <h2 className="text-lg sm:text-xl md:text-2xl text-[#E3E4E8] font-medium mb-8">
      Fullstack MERN Developer
    </h2>

    {/* Buttons */}
    <div className="flex gap-4 mb-12 flex-col sm:flex-row">
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#F6A800] text-[#151C28] px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#e89f00] transition-colors mb-4 sm:mb-0"
      >
        Download Resume
      </a>
      <a
        href="#about"
        className="border-2 border-[#F6A800] text-[#F6A800] px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#F6A800] hover:text-[#151C28] transition-colors"
      >
        About
      </a>
    </div>

    {/* Profile Image */}
    <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg hover:scale-105 transform transition-transform">
      <img
        src={imgs}
        alt="Sanjiv Singh"
        className="object-cover w-full h-full"
      />
    </div>

    {/* Text Section */}
    <div className="mt-6 md:mt-0 md:pl-4 max-w-3xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#F6A800] mb-4">
        About Me
      </h2>
      <p className="mt-4 text-lg sm:text-xl text-[#E3E4E8] leading-relaxed">
        As a Fullstack MERN Developer with over more than 2 years of experience,
        I have expanded my skill set, enhancing my proficiency in building and
        maintaining efficient and performant web applications. My expertise
        extends to not only front-end technologies such as HTML, CSS,
        JavaScript, and React.js but also advanced frameworks like react.js
      </p>
      <p className="mt-4 text-lg sm:text-xl text-[#E3E4E8] leading-relaxed">
        I possess a deep understanding of RESTful API design principles, with
        experience that includes successfully solving complex bugs in
        high-impact environments. I’ve effectively managed more than three
        websites, showcasing my ability to handle multiple projects and
        delivering outstanding results for clients.
      </p>
    </div>
  </section>
);

export default HeroSection;
