import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaCode } from 'react-icons/fa';

const projectsData = [
  {
    id: 'design-twitter',
    title: 'DesignTwitter',
    category: 'Full Stack',
    // Kept under 12-15 words as requested
    description: 'Twitter application in SpringBoot and Thymeleaf portraying core social media fundamentals.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600',
    viewLink: 'https://example.com/view/twitter',
    codeLink: 'https://github.com/kartik/twitter-clone',
  },
  {
    id: 'javascript-projects',
    title: 'JavaScript Projects',
    category: 'Frontend',
    description: 'A comprehensive collection of highly interactive utilities and modern UI components in vanilla JS.',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=600',
    viewLink: 'https://example.com/view/js',
    codeLink: 'https://github.com/kartik/js-projects',
  },
  {
    id: 'stockhub',
    title: 'StockHub',
    category: 'Backend',
    description: 'Real-time stock portfolio tracker leveraging robust custom microservice APIs for analytics.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600',
    viewLink: 'https://example.com/view/stock',
    codeLink: 'https://github.com/kartik/stockhub',
  },
  {
    id: 'family-tree',
    title: 'StockHub Pro',
    category: 'Python',
    description: 'Secure Python and Django dashboard built with hierarchical node tracking models.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=600',
    viewLink: 'https://example.com/view/family',
    codeLink: 'https://github.com/kartik/family-hub',
  }
];

const categories = ['All Projects', 'Full Stack', 'Frontend', 'Backend', 'Python'];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const filteredProjects = activeTab === 'All Projects'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section className="bg-[#03071e] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-yellow-400 selection:text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            <svg className="w-10 h-10 sm:w-11 sm:h-11 text-white fill-current" viewBox="0 0 24 24">
              <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
            </svg>
            <h1>
              Projects <span className="text-[#ffd000]">Made</span>
            </h1>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 text-sm sm:text-base font-semibold rounded-md border transition-all duration-200 cursor-pointer ${
                activeTab === cat
                  ? 'bg-white text-[#03071e] border-white'
                  : 'bg-transparent text-gray-300 border-gray-600 hover:text-white hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isHovered = hoveredCardId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-[360px]"
                  onMouseEnter={() => setHoveredCardId(project.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                >
                  {/* Enhanced Tilt Settings */}
                  <Tilt
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={900}
                    scale={1.06}
                    transitionSpeed={300}
                    glareEnable={false}
                    className="h-full"
                  >
                    <div className="relative h-[400px] rounded-xl overflow-hidden bg-[#061033] border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-end group cursor-pointer">
                      
                      {/* Cover Image - Fully unobstructed on top half */}
                      <div className="absolute inset-0 w-full h-[65%] overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#061033] to-transparent" />
                      </div>

                      {/* Default Yellow Label (Always Visible on Lower Cover Area) */}
                      <div className="absolute top-[52%] left-5 z-10 transition-opacity duration-200 group-hover:opacity-0">
                        <div className="bg-[#ffd000] text-[#03071e] py-1.5 px-3 rounded font-bold text-base shadow-md">
                          {project.title}
                        </div>
                      </div>

                      {/* ── Slide-up Panel System (Bottom Half Draw) ── */}
                      <div 
                        className="relative z-20 w-full bg-[#061033] border-t border-slate-800/60 p-5 flex flex-col justify-between transition-all duration-350 ease-out min-h-[140px]"
                        style={{
                          transform: isHovered ? 'translateY(0%)' : 'translateY(0%)',
                          height: isHovered ? '50%' : '35%'
                        }}
                      >
                        {/* Title showing up inside the slide drawer when hovered */}
                        <div className="flex flex-col gap-2">
                          {isHovered ? (
                            <h2 className="text-[#ffd000] font-bold text-lg leading-none">
                              {project.title}
                            </h2>
                          ) : null}
                          
                          <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed transition-opacity duration-200">
                            {project.description}
                          </p>
                        </div>

                        {/* Slide-Up Interactive Buttons Tray */}
                        <div 
                          className="flex items-center gap-3 mt-3 transition-all duration-300"
                          style={{
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? 'translateY(0px)' : 'translateY(15px)',
                            pointerEvents: isHovered ? 'auto' : 'none'
                          }}
                        >
                          <a 
                            href={project.viewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 bg-white text-[#03071e] py-2 rounded font-bold text-xs hover:scale-102 transition-transform duration-100 shadow-sm"
                          >
                            <FaEye /> View
                          </a>

                          <a 
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 bg-[#121212] text-white border border-gray-700 py-2 rounded font-bold text-xs hover:bg-[#1c1c1c] hover:scale-102 transition-transform duration-100 shadow-sm"
                          >
                            <FaCode /> Code
                          </a>
                        </div>
                      </div>

                    </div>
                  </Tilt>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}