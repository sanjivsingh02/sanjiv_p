

import React from 'react';
import ai from "../assets/ai_developer.webp";
import food from '../assets/project_d.webp';
import crypto from "../assets/project_c.webp";
import gm from '../assets/project_gm.webp';
import chess from '../assets/chess.webp';
import spy from '../assets/project_sp.webp';

const ProjectsSection = () => {
  const projects = [
    { name: 'AI Developer', link: '#', image: ai, description: 'AI project using deep learning techniques' },
    { name: 'Food Delivery Platform', link: 'https://github.com/sanjivsingh02/food_delivery', image: food, description: 'Platform for ordering food online' },
    { name: 'Crypto Rate Tracker', link: 'https://github.com/sanjivsingh02/crypto_rate', image: crypto, description: 'Real-time cryptocurrency rates tracker' },
    { name: 'Gemini Clone', link: 'https://github.com/sanjivsingh02/Gemini_clone', image: gm, description: 'A clone of the Gemini exchange platform' },
    { name: 'Chess Game', link: '#', image: chess, description: 'A fun chess game for all ages' },
    { name: 'Spotify Clone', link: 'https://github.com/sanjivsingh02/spotify_clone', image: spy, description: 'A clone of the Spotify music streaming service' }
  ];

  return (
    <div id="projects" className="projects-section py-16 bg-gradient-to-b from-[#151C28] to-[#2d3b4c] text-[#E3E4E8]">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#F6A800]">Projects</h2>
      <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-0">
        {projects.map((project, index) => (
          <div key={index} className="group relative project-card rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white p-4 hover:scale-105 transition-transform duration-300">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity" src={project.image} alt={project.name} />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white px-4 py-2">{project.description}</p>
                </div>
                {/* GitHub Icon */}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.16 6.84 9.49.5.09.68-.22.68-.49v-1.74c-2.77.6-3.35-1.33-3.35-1.33-.45-1.14-1.1-1.45-1.1-1.45-.9-.61.07-.6.07-.6 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.69-4.55 4.94.36.31.68.92.68 1.85v2.73c0 .27.18.58.69.48C19.13 20.16 22 16.41 22 12c0-5.52-4.48-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
              <h3 className="mt-4 text-xl text-center text-[#F6A800]">{project.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
