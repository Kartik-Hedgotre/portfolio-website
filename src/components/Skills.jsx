import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiTailwindcss, SiHtml5, SiCss, SiGit,
  SiGithub, SiDocker, SiKubernetes,
  SiFirebase, SiSpringboot, SiGo, SiLinux,
  SiGraphql, SiPrisma, SiRedux, SiVite,
  SiFramer, SiNginx, SiSocketdotio,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { TbApi, TbBrandAuth0 } from 'react-icons/tb';

/* ─── skill data ────────────────────────────────────────────────────── */
const skills = [
  { name: 'Java',          Icon: FaJava,        color: '#E76F00' },
  { name: 'C++',           Icon: SiCplusplus,   color: '#00599C' },
  { name: 'Python',        Icon: SiPython,      color: '#3776AB' },
  { name: 'JavaScript',    Icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'TypeScript',    Icon: SiTypescript,  color: '#3178C6' },
  { name: 'React',         Icon: SiReact,       color: '#61DAFB' },
  { name: 'Next.js',       Icon: SiNextdotjs,   color: '#FFFFFF' },
  { name: 'Node.js',       Icon: SiNodedotjs,   color: '#5FA04E' },
  { name: 'Express',       Icon: SiExpress,     color: '#FFFFFF' },
  { name: 'MongoDB',       Icon: SiMongodb,     color: '#47A248' },
  { name: 'PostgreSQL',    Icon: SiPostgresql,  color: '#4169E1' },
  { name: 'MySQL',         Icon: SiMysql,       color: '#4479A1' },
  { name: 'Redis',         Icon: SiRedis,       color: '#FF4438' },
  { name: 'Tailwind CSS',  Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML',          Icon: SiHtml5,       color: '#E34F26' },
  { name: 'CSS',           Icon: SiCss,         color: '#1572B6' },
  { name: 'Git',           Icon: SiGit,         color: '#F05032' },
  { name: 'GitHub',        Icon: SiGithub,      color: '#FFFFFF' },
  { name: 'Docker',        Icon: SiDocker,      color: '#2496ED' },
  { name: 'Kubernetes',    Icon: SiKubernetes,  color: '#326CE5' },
  { name: 'AWS',           Icon: FaAws,         color: '#FF9900' },
  { name: 'Firebase',      Icon: SiFirebase,    color: '#FFCA28' },
  { name: 'Spring Boot',   Icon: SiSpringboot,  color: '#6DB33F' },
  { name: 'Go',            Icon: SiGo,          color: '#00ACD7' },
  { name: 'Linux',         Icon: SiLinux,       color: '#FCC624' },
  { name: 'GraphQL',       Icon: SiGraphql,     color: '#E10098' },
  { name: 'Prisma',        Icon: SiPrisma,      color: '#2D3748' },
  { name: 'Redux',         Icon: SiRedux,       color: '#764ABC' },
  { name: 'Vite',          Icon: SiVite,        color: '#646CFF' },
  { name: 'Framer Motion', Icon: SiFramer,      color: '#FFFFFF' },
  { name: 'REST API',      Icon: TbApi,         color: '#22D3EE' },
  { name: 'JWT',           Icon: TbBrandAuth0,  color: '#EB5424' },
  { name: 'OAuth',         Icon: TbBrandAuth0,  color: '#4285F4' },
  { name: 'Nginx',         Icon: SiNginx,       color: '#009639' },
  { name: 'Socket.IO',     Icon: SiSocketdotio, color: '#FFFFFF' },
];

/* ─── animation variants ────────────────────────────────────────────── */
const sectionVariants = {
  hidden:  { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

/* ─── SkillCard ─────────────────────────────────────────────────────── */
function SkillCard({ name, Icon, color }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.06,
        y: -5,
        boxShadow: `0 16px 40px rgba(0,0,0,0.55)`,
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="flex h-[140px] cursor-default flex-col items-center justify-center gap-3 rounded-2xl bg-[#0B0620] px-3 py-5"
    >
      <Icon style={{ width: 52, height: 52, color, flexShrink: 0 }} />
      <span className="text-center text-[0.78rem] font-semibold leading-tight text-white">
        {name}
      </span>
    </motion.div>
  );
}

/* ─── Skills (main export) ─────────────────────────────────────────── */
export default function Skills() {
  return (
    <motion.section
      id="skills"
      aria-label="Skills and Abilities"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative overflow-hidden px-4 py-20 sm:px-8 sm:py-24"
      style={{
        background: 'linear-gradient(180deg, #5B11C8 0%, #3B0A8F 50%, #5B11C8 100%)',
      }}
    >
      {/* subtle radial glow overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,214,0,0.06) 0%, transparent 70%)',
        }}
      />

      {/* ── Heading ─────────────────────────────────────────────── */}
      <div className="relative mb-10 flex flex-col items-center gap-2">
        <div className="mb-1 flex items-center gap-3">
          <FaLaptopCode className="text-3xl text-yellow-300 sm:text-4xl" />
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-white">Skills &amp; </span>
            <span style={{ color: '#FFD600' }}>Abilities</span>
          </h2>
        </div>
        {/* decorative underline */}
        <div
          className="h-1 w-24 rounded-full"
          style={{ background: 'linear-gradient(90deg, #FFD600, #FF9A00)' }}
        />
      </div>

      {/* ── Skills container ────────────────────────────────────── */}
      <div className="relative mx-auto w-full max-w-[82%] rounded-2xl p-6 shadow-2xl sm:p-7"
        style={{ background: 'rgba(20, 5, 60, 0.65)' }}
      >
        {/* scrollable inner grid */}
        <div
          className="skills-scroll overflow-x-hidden overflow-y-auto"
          style={{ maxHeight: '480px', paddingRight: '4px' }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          >
            {skills.map(({ name, Icon, color }) => (
              <SkillCard key={name} name={name} Icon={Icon} color={color} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
