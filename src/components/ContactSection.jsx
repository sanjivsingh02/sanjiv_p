
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const ContactSection = () => (
  <section id="contact" className="py-16 bg-gradient-to-b from-[#2d3b4c] to-[#151C28] text-center text-[#E3E4E8]">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#F6A800]">Contact Me</h2>
    <p className="mt-4 text-lg sm:text-xl text-[#E3E4E8]">Feel free to reach out to me through the following platforms:</p>

    <div className="flex justify-center mt-8 space-x-6 flex-wrap gap-6 justify-center">
      <a
        href="mailto:singhsanjiv8888@gmail.com"
        className="text-[#F6A800] hover:text-[#F8B800] transition duration-300"
        aria-label="Email"
      >
        <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
      </a>
      <a
        href="https://www.linkedin.com/in/sanjiv-singh-a7166b2a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="text-[#F6A800] hover:text-[#F8B800] transition duration-300"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
      </a>
      <a
        href="https://github.com/Sanjivsingh02"
        className="text-[#F6A800] hover:text-[#F8B800] transition duration-300"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
      </a>
      <a
        href="tel:+918180934081"
        className="text-[#F6A800] hover:text-[#F8B800] transition duration-300"
        aria-label="Phone"
      >
        <FaPhone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
      </a>
    </div>
  </section>
);

export default ContactSection;



