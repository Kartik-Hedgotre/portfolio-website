import React, { useEffect, useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import avatarImage from '../assets/images/avatar.png';

export default function Avatar() {
  const innerRef = useRef(null);
  const [tiltEnabled, setTiltEnabled] = useState(false);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    // Add the one-time auto-tilt animation class on mount
    el.classList.add('avatar-auto-tilt');

    const handleAnimationEnd = () => {
      el.classList.remove('avatar-auto-tilt');
      setTiltEnabled(true); // enable interactive tilt after the auto animation
    };

    el.addEventListener('animationend', handleAnimationEnd, { once: true });

    // Fallback in case animationend doesn't fire
    const fallback = setTimeout(() => {
      el.classList.remove('avatar-auto-tilt');
      setTiltEnabled(true);
    }, 1200);

    return () => {
      clearTimeout(fallback);
      el.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <Tilt
      className="w-full max-w-[380px] sm:max-w-[420px]"
      tiltEnable={tiltEnabled}
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      perspective={1000}
      scale={1.05}
      transitionSpeed={500}
      glareEnable={false}
    >
      <div
        ref={innerRef}
        className="relative mx-auto aspect-square w-full max-w-[380px] overflow-hidden rounded-full border border-slate-200 bg-[#FFF3D9] p-3 shadow-[0_24px_70px_rgba(11,42,102,0.16)] sm:max-w-[420px] sm:p-4"
      >
        <img
          src={avatarImage}
          alt="Yash Pawar"
          className="h-full w-full rounded-full object-cover"
          loading="lazy"
        />
      </div>
    </Tilt>
  );
}
