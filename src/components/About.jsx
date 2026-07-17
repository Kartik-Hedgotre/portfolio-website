import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  FaUser,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaFileAlt,
} from 'react-icons/fa';
import avatarImage from '../assets/images/avatar.png';

/* ─────────────────────── animation variants ─────────────────────── */
const fadeFromTop = {
  hidden:  { opacity: 0, y: -32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeFromLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeFromRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 },
  },
};

/* ─────────────────────── contact links data ─────────────────────── */
const contactLinks = [
  {
    id:    'about-email',
    Icon:  FaEnvelope,
    label: 'kartikhedgotre50@gmail.com',
    href:  'mailto:kartik@example.com',
  },
  {
    id:    'about-github',
    Icon:  FaGithub,
    label: 'github.com/kartik',
    href:  'https://github.com/Kartik-Hedgotre/',
  },
  {
    id:    'about-linkedin',
    Icon:  FaLinkedinIn,
    label: 'linkedin.com/in/kartik',
    href:  'https://www.linkedin.com/in/kartik-hedgotre-b206382b9/',
  },
];

/* ─────────────────────── sub-components ─────────────────────────── */

function SectionHeading() {
  return (
    <motion.div
      variants={fadeFromTop}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      className="mb-16 flex flex-col items-center gap-3"
    >
      {/* eye-brow label */}
      <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-600 ring-1 ring-purple-200">
        <FaUser className="text-[0.65rem]" />
        Portfolio
      </span>

      {/* main heading */}
      <h2 className="text-center text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
        About{' '}
        <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      {/* decorative pill underline */}
      <div className="h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500" />
    </motion.div>
  );
}

function ContactLink({ id, Icon, label, href }) {
  const isEmail = href.startsWith('mailto');
  return (
    <a
      id={id}
      href={href}
      target={isEmail ? '_self' : '_blank'}
      rel="noreferrer"
      className="group inline-flex items-center gap-2.5 text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500 ring-1 ring-blue-100 transition-transform duration-200 group-hover:scale-110">
        <Icon className="text-xs" />
      </span>
      {label}
    </a>
  );
}

function ResumeButton() {
  return (
    <motion.a
      id="about-resume-btn"
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      whileHover={{
        scale: 1.06,
        boxShadow: '0 14px 40px rgba(139, 92, 246, 0.48)',
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-shadow duration-300"
    >
      <FaFileAlt className="text-sm" />
      View Resume
    </motion.a>
  );
}

function PortraitImage() {
  const [hovered, setHovered] = useState(false);

  return (
    <Tilt
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      perspective={1000}
      scale={1.03}
      transitionSpeed={500}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#c4b5fd"
      glarePosition="all"
      className="w-full max-w-[400px] sm:max-w-[440px]"
    >
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{
          y:         hovered ? -8  : 0,
          boxShadow: hovered
            ? '0 36px 90px rgba(139, 92, 246, 0.38)'
            : '0 20px 60px rgba(11, 42, 102, 0.18)',
        }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-3xl"
      >
        {/* portrait */}
        <img
          src={avatarImage}
          alt="Kartik — Full-Stack Developer"
          loading="lazy"
          className="h-full w-full object-cover"
          style={{
            filter: hovered
              ? 'grayscale(0%) saturate(1.15) brightness(1.05)'
              : 'grayscale(100%)',
            transform:  hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'filter 0.5s ease, transform 0.5s ease',
          }}
        />

        {/* purple shimmer overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(139,92,246,0.10) 0%, transparent 55%)',
            opacity:    hovered ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />
      </motion.div>
    </Tilt>
  );
}

/* ─────────────────────── main section ──────────────────────────── */
export default function About() {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-16 xl:py-32"
    >
      {/* ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(139,92,246,0.07) 0%, transparent 70%),' +
            'radial-gradient(ellipse 40% 40% at 10% 80%, rgba(59,24,255,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ── Section heading ── */}
        <SectionHeading />

        {/* ── Two-column body ──
             Mobile:  image on top  → flex-col-reverse
             Desktop: text left, image right → lg:flex-row */}
        <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">

          {/* ── LEFT: text content ── */}
          <motion.div
            variants={fadeFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex w-full flex-col gap-6 text-center lg:w-1/2 lg:text-left"
          >
            {/* name + subtitle */}
            <div>
              <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Kartik
              </h3>
              <p className="mt-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-base font-semibold text-transparent">
                Full-Stack Developer &amp; UI/UX Enthusiast
              </p>
            </div>

            {/* bio */}
            <div className="space-y-4 text-[0.9rem] leading-[1.75] text-slate-600">
              <p>
                Hi! I&apos;m{' '}
                <span className="font-semibold text-slate-800">Kartik</span>, a
                passionate Full-Stack Developer with a strong foundation in
                modern web technologies. I love crafting seamless, performant,
                and visually engaging digital experiences that leave a lasting
                impression.
              </p>
              <p>
                I specialise in the{' '}
                <span className="font-semibold text-violet-600">MERN stack</span>{' '}
                (MongoDB, Express, React, Node.js) and enjoy bridging the gap
                between clean code and polished design. Whether it&apos;s
                building robust APIs or pixel-perfect UIs, I bring precision and
                creativity to every project.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring
                open-source projects, sharpening problem-solving skills on
                competitive platforms, or experimenting with new design trends. I
                thrive in collaborative environments and am always eager to learn
                and grow.
              </p>
              <p>
                I&apos;m currently open to exciting{' '}
                <span className="font-semibold text-slate-800">
                  full-time opportunities
                </span>{' '}
                where I can contribute, grow, and keep building impactful
                software.
              </p>
            </div>

            {/* contact links */}
            <div className="flex flex-col items-center gap-2.5 lg:items-start">
              {contactLinks.map((link) => (
                <ContactLink key={link.id} {...link} />
              ))}
            </div>

            {/* resume CTA */}
            <div className="flex justify-center pt-1 lg:justify-start">
              <ResumeButton />
            </div>
          </motion.div>

          {/* ── RIGHT: portrait image ── */}
          <motion.div
            variants={fadeFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex w-full justify-center lg:w-1/2 lg:justify-end"
          >
            <PortraitImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
