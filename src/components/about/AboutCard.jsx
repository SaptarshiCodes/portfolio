import { useState, useRef } from "react";
import {
  Lightbulb,
  GraduationCap,
  Code2,
  Trophy,
  Compass,
  Rocket,
} from "lucide-react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Magnet from "../Magnet.jsx";

const cardData = [
  {
    icon: Lightbulb,
    title: "Insight",
    label: "Who I Am",
    description:
      "Creative problem solver passionate about crafting interactive, performant, and visually engaging digital experiences.",
    badges: ["Full-Stack", "Creative Dev", "UI Engineering"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    label: "Academic",
    description:
      "B.E. Information Technology student at Jadavpur University with a strong foundation in software engineering.",
    badges: ["Jadavpur University", "B.E. IT", "2023 - 2027"],
  },
  {
    icon: Code2,
    title: "Work Focus",
    label: "Development",
    description:
      "Building scalable full-stack applications using React, Node.js, Express, MongoDB and modern frontend tools.",
    badges: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: Trophy,
    title: "Achievements",
    label: "Milestones",
    description:
      "Consistent problem solver and engineering milestones across platforms and competitive examinations.",
    badges: ["200+ Solved", "WBJEE Rank 505", "Codeforces Pupil"],
  },
  {
    icon: Compass,
    title: "Philosophy",
    label: "Mindset",
    description:
      "Learning by building. Every project is an opportunity to master engineering, creativity and clean architecture.",
    badges: ["Clean Architecture", "Ship Early", "Iterate"],
  },
  {
    icon: Rocket,
    title: "Interests",
    label: "Beyond Code",
    description:
      "Creative development, GSAP animations, UI/UX, open source, competitive programming and emerging web technologies.",
    badges: ["GSAP Motion", "UI/UX", "Open Source", "Algorithms"],
  },
];

export default function MainGrid() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    // Calculate which card is closest to center
    const card = container.children[0];
    if (!card) return;
    const cardWidth = card.offsetWidth + 14; // width + gap (gap-3.5 is 14px)
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < cardData.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const targetIndex = Math.max(0, Math.min(index, cardData.length - 1));
    const container = scrollRef.current;
    const cards = container.children;
    if (cards[targetIndex]) {
      cards[targetIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveIndex(targetIndex);
    }
  };

  return (
    <div className="w-full pt-4 sm:pt-8 lg:pt-[4vw] px-0">
      {/* Mobile Horizontal Snap Reel (under md) */}
      <div className="block md:hidden">
        {/* Header with counter & interactive swipe buttons */}
        <div className="flex items-center justify-between mb-3.5 px-0.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
              {String(activeIndex + 1).padStart(2, "0")} / {String(cardData.length).padStart(2, "0")}
            </span>
            <span className="text-zinc-400">•</span>
            <span className="text-xs font-semibold text-zinc-200 font-[font2]">
              {cardData[activeIndex].title}
            </span>
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous aspect"
              className="relative w-8 h-8 rounded-full bg-zinc-800/90 border border-zinc-700 flex items-center justify-center text-zinc-200 disabled:opacity-30 disabled:pointer-events-none active:scale-90 transition-all before:absolute before:-inset-2 before:content-['']"
            >
              <FiArrowLeft size={14} />
            </button>
            <button
              onClick={() => scrollTo(activeIndex + 1)}
              disabled={activeIndex === cardData.length - 1}
              aria-label="Next aspect"
              className="relative w-8 h-8 rounded-full bg-zinc-800/90 border border-zinc-700 flex items-center justify-center text-zinc-200 disabled:opacity-30 disabled:pointer-events-none active:scale-90 transition-all before:absolute before:-inset-2 before:content-['']"
            >
              <FiArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Swipeable Track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 pt-0.5 px-0.5 overscroll-x-contain"
          style={{
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-y",
          }}
        >
          {cardData.map((card, idx) => {
            const Icon = card.icon;
            const isCurrent = idx === activeIndex;

            return (
              <div
                key={card.title}
                onClick={() => scrollTo(idx)}
                className={`
                  shrink-0
                  w-[84vw]
                  max-w-[325px]
                  snap-center
                  flex
                  flex-col
                  justify-between
                  rounded-3xl
                  border
                  p-5
                  min-h-[280px]
                  transition-all
                  duration-300
                  select-none
                  ${
                    isCurrent
                      ? "bg-[hsl(0,0%,11%)] border-zinc-600 shadow-[0_8px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
                      : "bg-[hsl(0,0%,8%)] border-zinc-800"
                  }
                `}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-[0.2em] text-xs font-semibold text-zinc-300 font-mono">
                      {card.label}
                    </span>

                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700"
                      aria-hidden="true"
                    >
                      <Icon size={20} className="text-zinc-100" />
                    </div>
                  </div>

                  <h3 className="mt-3.5 text-2xl font-semibold text-white font-[font2]">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-zinc-200 leading-relaxed text-xs sm:text-sm">
                    {card.description}
                  </p>
                </div>

                {/* Badges / Micro-chips */}
                <div className="mt-4 pt-3.5 border-t border-zinc-800 flex flex-wrap gap-1.5">
                  {card.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-zinc-800/90 border border-zinc-700 text-zinc-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Progress Dots with 44px Accessible Touch Targets */}
        <div className="flex justify-center items-center gap-0.5 mt-2">
          {cardData.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative min-w-[28px] h-11 flex items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded-full"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 pointer-events-none ${
                  i === activeIndex
                    ? "w-6 bg-white"
                    : "w-1.5 bg-zinc-400 hover:bg-zinc-200"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout (md and up) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
        {cardData.map((card) => {
          const Icon = card.icon;

          return (
            <Magnet key={card.title} strength={0.02} padding={10}>
              <div
                data-scroll-reveal
                className="
                group
                flex
                flex-col
                justify-between
                relative
                h-full
                w-full
                rounded-3xl
                border
                border-zinc-800
                bg-[hsl(0,0%,10%)]
                p-6 sm:p-7
                min-h-64
                overflow-hidden
                hover:border-zinc-700
                hover:shadow-[0_0_40px_rgba(161,161,170,0.15)]
                transition-all
                duration-300
                select-none
              "
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl border border-zinc-400/30 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-[0.25em] text-xs text-zinc-300 font-semibold font-mono">
                      {card.label}
                    </span>

                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700"
                      aria-hidden="true"
                    >
                      <Icon
                        size={22}
                        className="text-zinc-200 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-white font-[font2]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-zinc-200 leading-relaxed text-sm sm:text-base font-[font1]">
                    {card.description}
                  </p>
                </div>

                {/* Badges / Micro-chips */}
                <div className="mt-5 pt-4 border-t border-zinc-800 flex flex-wrap gap-2">
                  {card.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800/90 border border-zinc-700 text-zinc-200 group-hover:border-zinc-500 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Magnet>
          );
        })}
      </div>
    </div>
  );
}
