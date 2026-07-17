import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import TypingText from './TypingText';
import Avatar from './Avatar';
import SocialIcons from './SocialIcons';
import Button from './Button';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-white px-6 py-0 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,24,255,0.04),_transparent_35%)]" />
      <ParticlesBackground />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-0.1rem)] max-w-7xl flex-col items-center justify-start gap-2 pt-16 sm:pt-20 lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl text-left lg:pr-2"
        >
          <div>
            <h1 className="text-[3.5rem] font-extrabold tracking-[-0.02em] leading-[1.1] text-[#0B2A66] mb-2">
              Hi There,
            </h1>
            <h1 className="text-[3.5rem] whitespace-nowrap font-extrabold tracking-[-0.02em] leading-[1.1] text-[#0B2A66]">
              <span className="text-[#0B2A66]">I&apos;m</span>{' '}
              <span className="text-[#FF7A00]">Kartik</span>
            </h1>
            <p className="mt-[18px] text-[0.875rem] font-semibold tracking-normal leading-[1.5] text-[#1E40AF] whitespace-nowrap">
              Open to FullTime Opportunities
            </p>
            <TypingText />
          </div>
          <div className="mt-2 flex flex-col items-center gap-3 lg:items-start">
            <Button />
            <SocialIcons />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="flex w-full justify-center lg:-mt-8 lg:-ml-6 lg:justify-end"
        >
          <Avatar />
        </motion.div>
      </div>
    </section>
  );
}
