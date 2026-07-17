import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const educationData = [
  {
    id: 'edu-ms',
    degree: "Master's of Science in Information Systems",
    institution: 'Northeastern University, Boston, MA',
    gpa: '3.8',
    timeline: 'Sep 2022 - August 2024 | Graduated',
    // Using high-quality educational placeholder images. Replace with your local assets if needed.
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600',
    courses: [
      'Program Structures and Algorithms',
      'Web Development Tools & Methods',
      'Web Design / User Experience Engineering',
      'Software Quality Control and Management',
      'Concepts of Object Oriented Design',
      'Application Engineering and Development',
      'Database Management and Database Design'
    ]
  },
//   {
//     id: 'edu-be',
//     degree: 'Bachelor of Engineering in Information Technology',
//     institution: 'Sinhgad College of engineering | Pune University',
//     gpa: '3.7',
//     timeline: 'Aug 2016 - May 2020 | Graduated',
//     image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600',
//     courses: [
//       'Data Structures & Algorithms',
//       'Database Management Systems',
//       'Operating Systems',
//       'Object Oriented Programming',
//       'Computer Networks',
//       'Software Engineering'
//     ]
//   }
];

export default function Education() {
  // Track which card ID is currently hovered or active
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="bg-[#f0f4ff] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-purple-200">
      <div className="max-w-5xl mx-auto">
        
        {/* ── Header Section ────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 text-4xl sm:text-5xl font-extrabold text-[#6b21a8] tracking-tight">
            {/* Graduation Cap Icon */}
            <svg 
              className="w-10 h-10 sm:w-12 sm:h-12 fill-current drop-shadow-sm" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM4.44 10.87L12 15l7.56-4.13v2.26L12 17.25l-7.56-4.12v-2.26z" />
            </svg>
            <h1 className="font-sans">Education</h1>
          </div>
          
          {/* Elegant quote with Malcolm X's name removed */}
          <p className="mt-4 text-[#4a5568] italic text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
          </p>
        </div>

        {/* ── Cards Container ───────────────────────────────────────── */}
        <div className="space-y-6">
          {educationData.map((edu) => {
            const isExpanded = hoveredId === edu.id;

            return (
              <div 
                key={edu.id}
                onMouseEnter={() => setHoveredId(edu.id)}
                onMouseLeave={() => setHoveredId(null)}
                // Mobile tap compatibility
                onTouchStart={() => setHoveredId(edu.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row transition-all duration-300 ease-out cursor-pointer"
                style={{
                  transform: isExpanded ? 'translateY(-4px)' : 'translateY(0px)',
                }}
              >
                {/* Left Column: Fixed Aspect Ratio Image Area */}
                <div className="md:w-1/3 min-h-[220px] md:min-h-full relative overflow-hidden bg-gray-150 shrink-0">
                  <img 
                    src={edu.image} 
                    alt={edu.institution} 
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out"
                    style={{
                      transform: isExpanded ? 'scale(1.08)' : 'scale(1.00)'
                    }}
                  />
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-350" />
                </div>

                {/* Right Column: Card Content Info */}
                <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-between self-stretch">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0f3a73] tracking-wide mb-1 leading-snug">
                      {edu.degree}
                    </h2>
                    <p className="text-gray-700 font-semibold text-sm sm:text-base mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 font-bold text-xs sm:text-sm mb-4">
                      GPA: {edu.gpa}
                    </p>

                    {/* Smooth Framer Motion Accordion Collapse */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="courses-panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pt-2">
                            <h3 className="text-[#15803d] font-extrabold text-base sm:text-lg mb-2 tracking-wide uppercase text-xs">
                              Courses
                            </h3>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-800 font-semibold tracking-wide">
                              {edu.courses.map((course, idx) => (
                                <li key={idx} className="hover:text-[#6b21a8] transition-colors duration-150">
                                  {course}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Dynamic Bottom Line/Footer */}
                  <div className="text-[#15803d] font-bold text-sm sm:text-base pt-4 border-t border-gray-100 mt-2">
                    {edu.timeline}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}