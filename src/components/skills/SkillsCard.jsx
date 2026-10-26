import { useState } from "react";
import { Code2, Globe, Wrench, Cpu, Sparkles } from "lucide-react";
import Magnet from "../Magnet";

const skillCards = [
  {
    id: "languages",
    title: "Languages",
    shortTitle: "Languages",
    icon: Code2,
    description:
      "Programming languages used for building scalable web apps and algorithmic problem solving.",
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    id: "web",
    title: "Web Development",
    shortTitle: "Web Dev",
    icon: Globe,
    description:
      "Modern full-stack technologies for frontend interfaces, backend APIs, and real-time networking.",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    shortTitle: "Tools",
    icon: Wrench,
    description:
      "Essential developer tooling, version control, database engines, and API testing platforms.",
    skills: ["Git", "GitHub", "Linux", "MongoDB", "MySQL", "Postman", "Clerk"],
  },
  {
    id: "core-cs",
    title: "Core CS",
    shortTitle: "Core CS",
    icon: Cpu,
    description:
      "Foundational computer science principles, data structures, algorithms, and system fundamentals.",
    skills: [
      "Data Structures & Algorithms",
      "Dynamic Programming",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

const totalSkillsCount = skillCards.reduce(
  (acc, card) => acc + card.skills.length,
  0
);

const allCategory = {
  id: "all",
  title: "All Proficiencies",
  shortTitle: "All",
  icon: Sparkles,
  description:
    "Comprehensive technical toolkit across languages, web development, tools, and computer science.",
};

const categories = [
  { ...allCategory, count: totalSkillsCount },
  ...skillCards.map((c) => ({ ...c, count: c.skills.length })),
];

export default function SkillsCard() {
  const [activeCategory, setActiveCategory] = useState("all");

  const currentCat =
    categories.find((c) => c.id === activeCategory) || categories[0];
  const CurrentIcon = currentCat.icon;

  // Compute displayed skills with their parent category name
  const currentSkills =
    activeCategory === "all"
      ? skillCards.flatMap((card) =>
          card.skills.map((name) => ({
            name,
            category: card.shortTitle,
          }))
        )
      : (skillCards.find((c) => c.id === activeCategory)?.skills || []).map(
          (name) => ({
            name,
            category: currentCat.shortTitle,
          })
        );

  return (
    <div className="w-full pt-4 sm:pt-10 lg:pt-[5vw] px-0 lg:px-[1vw]">
      {/* Mobile Interactive Category Dock Layout (under md) */}
      <div className="block md:hidden">
        {/* Horizontal Category Pill Dock */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 select-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex
                  items-center
                  gap-2
                  shrink-0
                  px-3.5
                  py-2
                  rounded-full
                  text-xs
                  font-mono
                  transition-all
                  duration-200
                  active:scale-95
                  ${
                    isSelected
                      ? "bg-white text-zinc-950 shadow-[0_4px_20px_rgba(255,255,255,0.25)] font-semibold"
                      : "bg-zinc-900/90 text-zinc-300 border border-zinc-750 hover:text-white hover:border-zinc-600 font-medium"
                  }
                `}
              >
                <Icon
                  size={14}
                  className={isSelected ? "text-zinc-950" : "text-zinc-300"}
                />
                <span>{cat.shortTitle}</span>
                <span
                  className={`
                    text-[10px]
                    px-1.5
                    py-0.5
                    rounded-full
                    font-mono
                    ${
                      isSelected
                        ? "bg-zinc-950/15 text-zinc-900"
                        : "bg-zinc-800 text-zinc-300"
                    }
                  `}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Full-width Skill Badge Matrix Panel */}
        <div className="mt-3.5 rounded-3xl bg-[hsl(0,0%,9%)] border border-zinc-800/80 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all">
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-zinc-800/80">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700">
                <CurrentIcon size={18} className="text-zinc-100" />
              </div>
              <div>
                <h3 className="font-[font2] text-lg font-semibold text-white tracking-tight">
                  {currentCat.title}
                </h3>
                <span className="text-[11px] font-mono text-zinc-300">
                  {currentSkills.length}{" "}
                  {currentSkills.length === 1 ? "Technology" : "Technologies"}
                </span>
              </div>
            </div>

            {/* Status Beacon Tag */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Active Stack
            </div>
          </div>

          {/* Category description */}
          <p className="text-xs text-zinc-300 leading-relaxed font-[font1] mb-4">
            {currentCat.description}
          </p>

          {/* Skills Badges Cloud */}
          <div className="flex flex-wrap gap-2">
            {currentSkills.map((skill) => (
              <span
                key={skill.name}
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-xl
                  bg-zinc-900/90
                  border
                  border-zinc-800
                  hover:border-zinc-700
                  text-zinc-200
                  text-xs
                  font-mono
                  transition-all
                  duration-200
                  active:scale-95
                  shadow-sm
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                <span className="font-medium">{skill.name}</span>
                {activeCategory === "all" && (
                  <span className="text-[9px] uppercase tracking-wider text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded font-mono font-medium">
                    {skill.category}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Grid Layout (md and up) */}
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {skillCards.map((card) => {
          const Icon = card.icon;

          return (
            <Magnet key={card.title} strength={0.02} padding={10}>
              <div
                data-scroll-reveal
                className="
                group
                relative
                flex
                flex-col
                h-full
                w-full
                bg-[hsl(0,0%,10%)]
                border
                border-zinc-800
                rounded-2xl sm:rounded-3xl
                p-3.5 sm:p-6
                lg:py-[1.5vw]
                lg:px-[1.5vw]
                transition-all
                duration-300
                hover:border-zinc-600
                hover:shadow-[0_0_40px_rgba(161,161,170,0.20)]
              "
              >
                {/* Icon */}
                <div
                  className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-800/40"
                  aria-hidden="true"
                >
                  <Icon
                    className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-200 group-hover:text-white transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-2.5 sm:mt-4 lg:mt-[1vw] font-[font2] text-base sm:text-xl lg:text-2xl font-semibold text-white tracking-tight">
                  {card.title}
                </h3>

                {/* Skills */}
                <div className="mt-2.5 sm:mt-4 lg:mt-[1.5vw] flex flex-wrap gap-1.5 sm:gap-2">
                  {card.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                      px-2.5
                      py-1
                      sm:px-4
                      sm:py-1.5
                      rounded-full
                      border
                      border-zinc-700/80
                      text-zinc-300
                      text-[11px]
                      sm:text-xs
                      lg:text-sm
                      transition-all
                      duration-300
                      hover:border-zinc-400
                      hover:text-white
                      hover:bg-zinc-800/60
                    "
                    >
                      {skill}
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
