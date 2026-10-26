import SkillsCard from "../components/skills/SkillsCard";
import SkillsFooter from "../components/skills/SkillsFooter";
import String from "../components/String";

const Skills = () => {
  return (
    <section
      id="skills"
      aria-label="Skills and Technical Proficiencies"
      className="relative min-h-0 sm:min-h-screen w-full bg-[hsl(0,0%,3%)] pt-8 pb-10 sm:pt-20 sm:pb-20 lg:pt-[5vw] lg:pb-[5vw] px-4 sm:px-6 lg:px-[2vw] overflow-hidden"
    >

      <h2
        data-scroll-reveal
        className="relative z-10 text-zinc-100 uppercase font-[font2] text-2xl sm:text-3xl lg:text-[2vw] font-extrabold leading-relaxed transform-[scaleY(1.4)] lg:transform-[scaleY(1.6)]"
      >
        My Skills
      </h2>
      <String />
      <div className="relative z-10">
        <SkillsCard />
        <SkillsFooter />
      </div>
    </section>
  );
};

export default Skills;