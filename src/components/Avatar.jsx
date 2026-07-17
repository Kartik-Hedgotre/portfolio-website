import Tilt from 'react-parallax-tilt';
import avatarImage from '../assets/images/avatar.png';

export default function Avatar() {
  return (
    <Tilt
      className="w-full max-w-[380px] sm:max-w-[420px]"
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      scale={1.05}
      transitionSpeed={500}
      glareEnable={false}
    >
      <div className="relative mx-auto aspect-square w-full max-w-[380px] overflow-hidden rounded-full border border-slate-200 bg-[#FFF3D9] p-3 shadow-[0_24px_70px_rgba(11,42,102,0.16)] sm:max-w-[420px] sm:p-4">
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
