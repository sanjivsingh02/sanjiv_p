
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExperiencesSection from './components/ExperiencesSection';
import ProjectsSection from './components/ProjectsSection';

import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingNavBar from './components/FloatingNavBar';



const App = () => {
  return (
    <div className="font-sans bg-[#151C28] text-[#E3E4E8]">
      <Header/>
      <HeroSection/>
      <ExperiencesSection/>
      <ProjectsSection/>
      <ContactSection/>
      <FloatingNavBar/>
      <Footer/>
    </div>
  );
};



export default App;
