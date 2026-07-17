import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

export default function Button() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
      <Link
        to="about"
        smooth
        duration={600}
        offset={-80}
        className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#3B18FF] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(59,24,255,0.25)] transition hover:-translate-y-1 hover:bg-[#2E0BE8] hover:shadow-[0_25px_55px_rgba(59,24,255,0.3)]"
      >
        <span>About Me</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition group-hover:scale-105">
          <FiArrowRight />
        </span>
      </Link>
    </motion.div>
  );
}
