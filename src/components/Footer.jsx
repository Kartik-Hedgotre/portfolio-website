import React from 'react';
import { Link } from 'react-scroll';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaEnvelope, 
  FaTelegramPlane, 
  FaPhoneAlt,
  FaChevronCircleRight 
} from 'react-icons/fa';

// ── Quick Links Navigation Data ──────────────────────────────────────
const quickLinks = [
  { name: 'home', target: 'home' },
  { name: 'about', target: 'about' },
  { name: 'skills', target: 'skills' },
  { name: 'education', target: 'education' },
  { name: 'work', target: 'projects' }, 
  { name: 'experience', target: 'experience' }
];

// ── Social Icons Data Configuration (YouTube & HackerRank Removed) ───
const socialIcons = [
  { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/kartik-hedgotre-b206382b9/', label: 'LinkedIn' },
  { Icon: FaGithub, href: 'https://github.com/Kartik-Hedgotre/', label: 'GitHub' },
  { Icon: FaEnvelope, href: 'mailto:kartikhedgotre50@gmail.com', label: 'Email Link' },
  { Icon: FaTelegramPlane, href: 'https://t.me/kartik-hedgotre', label: 'Telegram' }
];

export default function Footer() {
  return (
    <footer className="bg-[#030226] text-white pt-14 pb-6 px-6 sm:px-12 lg:px-20 border-t border-slate-900/40 font-sans tracking-wide">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-10 border-b border-gray-800">
        
        {/* ── Column 1: Intro Summary ────────────────────────────────── */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Kartik's Portfolio</h2>
          <p className="text-gray-300 text-sm sm:text-base font-medium max-w-sm leading-relaxed">
            Thank you for visiting my portfolio website. Connect with me over social media.
          </p>
          <p className="text-gray-300 text-sm sm:text-base font-medium mt-2">
            Keep Rising 🚀 . Connect with me over live chat!
          </p>
        </div>

        {/* ── Column 2: Quick Links ──────────────────────────────────── */}
        <div className="flex flex-col gap-4 md:pl-8">
          <h2 className="text-2xl font-bold tracking-tight capitalize">quick links</h2>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-[#ffd000] text-sm sm:text-base font-semibold capitalize cursor-pointer transition-colors duration-150 group"
                >
                  <FaChevronCircleRight className="text-gray-400 group-hover:text-[#ffd000] transition-colors duration-150 text-base" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Contact Info & Circles ───────────────────────── */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold tracking-tight capitalize">contact info</h2>
          
          <div className="flex flex-col gap-3 text-sm sm:text-base text-gray-300 font-semibold">
            <a href="tel:+917499855407" className="flex items-center gap-3 hover:text-[#ffd000] transition-colors">
              <FaPhoneAlt className="text-[#ffd000] text-base" />
              <span>+91 749-985-5407</span>
            </a>
            <a href="mailto:kartikhedgotre50@gmail.com" className="flex items-center gap-3 hover:text-[#ffd000] transition-colors break-all">
              <FaEnvelope className="text-[#ffd000] text-base" />
              <span>kartikhedgotre50@gmail.com</span>
            </a>
          </div>

          {/* Social Circle Icon Grid */}
          <div className="flex flex-wrap gap-3 mt-2">
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white text-[#030226] flex items-center justify-center text-lg font-bold transition-all duration-200 hover:bg-[#ffd000] hover:text-[#030226] hover:-translate-y-1 shadow-md"
              >
                <social.Icon />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── Lower Copyright Bar ──────────────────────────────────────── */}
      <div className="text-center pt-6 text-sm sm:text-base font-semibold text-gray-300 tracking-wide">
        Designed with <span className="text-red-600 animate-pulse mx-0.5">❤️</span> by{' '}
        <span className="text-[#ffd000] hover:underline cursor-pointer">Kartik Hedgotre</span>
      </div>
    </footer>
  );
}