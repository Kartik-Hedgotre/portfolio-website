import { Typewriter } from 'react-simple-typewriter';

export default function TypingText() {
  const words = ['Competitive Programming', 'Backend Development', 'Full Stack Development'];

  return (
    /*
     * w-full prevents the parent from collapsing around this element.
     * The typewriter span has a fixed min-width that matches the longest
     * phrase, so the row below (social icons) never shifts position.
     */
    <div className="mt-[32px] flex w-full flex-nowrap items-baseline justify-start gap-2 text-[1rem] font-semibold leading-[1.4] text-[#111827]">
      <span className="whitespace-nowrap">I am into</span>
      <span
        className="min-h-[1.4em] font-bold text-[#8B0000]"
        style={{ display: 'inline-block', minWidth: '22ch' }}
      >
        <Typewriter
          words={words}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={45}
          delaySpeed={1500}
        />
      </span>
    </div>
  );
}

