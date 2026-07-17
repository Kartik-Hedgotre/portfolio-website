import { useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

/* ── per-brand config ─────────────────────────────────────────────── */
const socials = [
  {
    id: 'social-linkedin',
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/kartik-hedgotre-b206382b9/',
    label: 'LinkedIn',
    defaultColor: '#0A66C2',
    hoverBg: '#0A66C2',
    hoverShadow: '0 8px 24px rgba(10, 102, 194, 0.55)',
  },
  {
    id: 'social-github',
    Icon: FaGithub,
    href: 'https://github.com/Kartik-Hedgotre/',
    label: 'GitHub',
    defaultColor: '#00E5FF',
    hoverBg: '#000000',
    hoverShadow: '0 8px 24px rgba(0, 0, 0, 0.50)',
  },
  {
    id: 'social-leetcode',
    Icon: SiLeetcode,
    href: 'https://leetcode.com/u/kaartik_1221/',
    label: 'LeetCode',
    defaultColor: '#FFA116',
    hoverBg: '#FFA116',
    hoverShadow: '0 8px 24px rgba(255, 161, 22, 0.55)',
  },
  {
    id: 'social-codeforces',
    Icon: SiCodeforces,
    href: 'https://codeforces.com/profile/Kartik_Hedgotre',
    label: 'Codeforces',
    defaultColor: '#1F8FFF',
    hoverBg: '#1F8FFF',
    hoverShadow: '0 8px 24px rgba(31, 143, 255, 0.55)',
  },
];

/* ── component ────────────────────────────────────────────────────── */
export default function SocialIcons() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    /*
     * flex-nowrap + shrink-0 on each button guarantees a single
     * horizontal row regardless of the parent's width.
     */
    <div
      className="flex flex-nowrap items-center gap-5"
      style={{ minWidth: 'max-content' }}
    >
      {socials.map(({ id, Icon, href, label, defaultColor, hoverBg, hoverShadow }) => {
        const isHovered = hoveredId === id;

        return (
          <a
            key={id}
            id={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              /* layout */
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              width: '56px',
              height: '56px',
              borderRadius: '9999px',
              cursor: 'pointer',
              /* dynamic */
              backgroundColor: isHovered ? hoverBg : '#09011b',
              color: isHovered ? '#ffffff' : defaultColor,
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              boxShadow: isHovered ? hoverShadow : '0 2px 8px rgba(0,0,0,0.30)',
              transition: 'background-color 300ms ease, color 300ms ease, transform 300ms ease, box-shadow 300ms ease',
            }}
          >
            <Icon style={{ width: '26px', height: '26px' }} />
          </a>
        );
      })}
    </div>
  );
}

