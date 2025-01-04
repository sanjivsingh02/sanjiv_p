// import React from 'react';
// const ExperiencesSection = () => (
//   <section id="experience" className="py-16 bg-gradient-to-b from-[#2d3b4c] to-[#151C28] text-center text-[#E3E4E8]">
//     <h2 className="text-3xl sm:text-4xl font-bold text-[#F6A800]">My Experience</h2>
//     <div className="mt-8 flex flex-wrap justify-center gap-6">
//       {/* Frontend Development Card */}
//       <div className="bg-gradient-to-b from-[#4c5b6c] to-[#2d3b4c] p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 hover:scale-105 transition-transform">
//         <h3 className="text-xl font-semibold text-[#F6A800] mb-4">Frontend Development</h3>
//         <ul className="space-y-3 text-left">
//           <li className="flex items-center">
//             <span className="text-[#F6A800] mr-2">✔</span> React.js (Advanced)
//           </li>
//           <li className="flex items-center">
//             <span className="text-[#F6A800] mr-2">✔</span> TypeScript (Beginner)
//           </li>
//           <li className="flex items-center">
//             <span className="text-[#F6A800] mr-2">✔</span> HTML/CSS (Advanced)
//           </li>
//           <li className="flex items-center">
//             <span className="text-[#F6A800] mr-2">✔</span> Tailwind CSS (Intermediate)
//           </li>
//           <li className="flex items-center">
//             <span className="text-[#F6A800] mr-2">✔</span> JavaScript (Advanced)
//           </li>
//         </ul>
//       </div>

//       {/* Backend Development Card */}
//       <div className="bg-gradient-to-b from-[#4c5b6c] to-[#2d3b4c] p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 hover:scale-105 transition-transform">
//         <h3 className="text-xl font-semibold text-[#F6A800] mb-4">Backend Development</h3>
//         <ul className="space-y-3 text-left">
//           <li className="flex items-center">
//             <span className="text-[#F6A800] mr-2">✔</span> Node.js (Advanced)
//           </li>
//           <li className="flex items-center">
//             <span className="text-[#F6A800] mr-2">✔</span> Express.js (Advanced)
//           </li>
//           <li className="flex items-center">
//             <span className="text-[#F6A800] mr-2">✔</span> MongoDB (Intermediate)
//           </li>
//           <li className="flex items-center">
//             <span className="text-[#F6A800] mr-2">✔</span> Redis (Intermediate)
//           </li>
//           <li className="flex items-center">
//             <span className="text-[#F6A800] mr-2">✔</span> Python (Intermediate)
//           </li>
//         </ul>
//       </div>
//     </div>
//   </section>
// );

// export default ExperiencesSection;

import React from 'react';

const ExperiencesSection = () => (
  <section id="experience" className="py-16 bg-gradient-to-b from-[#2d3b4c] to-[#151C28] text-center text-[#E3E4E8]">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#F6A800] mb-8">My Experience</h2>
    <div className="mt-8 flex flex-wrap justify-center gap-6">
      {/* Frontend Development Card */}
      <div className="bg-gradient-to-b from-[#4c5b6c] to-[#2d3b4c] p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold text-[#F6A800] mb-4">Frontend Development</h3>
        <ul className="space-y-3 text-left">
          <li className="flex items-center">
            <span className="text-[#F6A800] mr-2">✔</span> React.js (Advanced)
          </li>
          <li className="flex items-center">
            <span className="text-[#F6A800] mr-2">✔</span> TypeScript (Beginner)
          </li>
          <li className="flex items-center">
            <span className="text-[#F6A800] mr-2">✔</span> HTML/CSS (Advanced)
          </li>
          <li className="flex items-center">
            <span className="text-[#F6A800] mr-2">✔</span> Tailwind CSS (Intermediate)
          </li>
          <li className="flex items-center">
            <span className="text-[#F6A800] mr-2">✔</span> JavaScript (Advanced)
          </li>
        </ul>
      </div>

      {/* Backend Development Card */}
      <div className="bg-gradient-to-b from-[#4c5b6c] to-[#2d3b4c] p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold text-[#F6A800] mb-4">Backend Development</h3>
        <ul className="space-y-3 text-left">
          <li className="flex items-center">
            <span className="text-[#F6A800] mr-2">✔</span> Node.js (Advanced)
          </li>
          <li className="flex items-center">
            <span className="text-[#F6A800] mr-2">✔</span> Express.js (Advanced)
          </li>
          <li className="flex items-center">
            <span className="text-[#F6A800] mr-2">✔</span> MongoDB (Intermediate)
          </li>
          <li className="flex items-center">
            <span className="text-[#F6A800] mr-2">✔</span> Redis (Intermediate)
          </li>
          <li className="flex items-center">
            <span className="text-[#F6A800] mr-2">✔</span> Python (Intermediate)
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default ExperiencesSection;
