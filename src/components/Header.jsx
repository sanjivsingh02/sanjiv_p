import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#151C28] text-[#E3E4E8] py-6 px-4">
      <nav className="flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-3xl font-bold text-[#F6A800]">Sanjiv Singh</h1>

      </nav>
    </header>
  );
};

export default Header;
