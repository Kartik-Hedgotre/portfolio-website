import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

const links = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Education', to: 'education' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-1' : 'py-1'}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-none border-0 bg-white/95 px-4 py-2 shadow-[0_8px_24px_rgba(11,42,102,0.08)] backdrop-blur md:px-8 lg:rounded-full lg:border lg:border-slate-200/80 lg:px-6">
        <Link
          to="home"
          smooth
          duration={600}
          offset={-80}
          className="flex cursor-pointer items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2A66] text-lg font-semibold text-white shadow-lg shadow-[#0B2A66]/20 transition-transform duration-300 hover:scale-105">
            <FaCode />
          </div>
          <div>
            <p className="text-lg font-semibold text-[#0B2A66]">Kartik</p>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-slate-500">Developer</p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={600}
              offset={-90}
              activeClass="text-[#3B18FF]"
              className="group relative cursor-pointer px-1 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:text-[#3B18FF]"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#3B18FF] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-full border border-slate-200 p-2 text-[#0B2A66] lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mx-4 mt-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer text-sm font-medium text-slate-700 transition hover:text-[#3B18FF]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
