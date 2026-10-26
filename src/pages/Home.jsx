import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import Orb from "../components/background/Orb";

const Home = () => {
  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative min-h-0 sm:min-h-screen w-full bg-[hsl(0,0%,3%)] overflow-hidden flex items-center justify-center"
    >
      <div className="relative w-full min-h-0 sm:min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center sm:justify-between pt-24 pb-8 sm:pt-28 sm:pb-16 lg:pt-[3vw] px-4 sm:px-6 lg:px-[2vw] z-10">
        {/* Left text section (60% on desktop) */}
        <div className="w-full lg:w-[60%] relative z-10 flex flex-col justify-center">
          <div className="p-1 sm:p-4 lg:p-[1.5vw] xl:p-[2vw]">
            {/* Availability Status Badge with ticking dot */}
            <div className="my-2 sm:my-4 lg:my-[0.8vw]">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs lg:text-[0.75vw] font-mono tracking-wide">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500" />
                </span>
                <span>Available for new opportunities</span>
              </div>
            </div>

            <h1
              className="text-zinc-300 text-2xl sm:text-2xl lg:text-[2.2vw] font-semibold font-[font2] py-1 sm:py-3 lg:py-[1.5vw]"
            >
              Saptarshi Manna
            </h1>

            {/* Main Headline with responsive font size to fit screen perfectly */}
            <div className="flex flex-col gap-2.5 sm:gap-6 lg:gap-[1.5vw] my-2 sm:my-4 lg:my-[1.2vw]">
              <h2
                className="text-zinc-100 text-[8.5vw] xs:text-4xl sm:text-6xl md:text-7xl lg:text-[5.4vw] xl:text-[5.8vw] font-black uppercase font-[font2] tracking-wide transform-[scaleY(1.35)] sm:transform-[scaleY(1.5)] lg:transform-[scaleY(1.7)] origin-left leading-[1.1] py-1 pt-4 sm:py-1"
              >
                Crafting
              </h2>

              <h2
                className="text-zinc-300/80 text-[6.8vw] xs:text-3xl sm:text-5xl md:text-6xl lg:text-[4.1vw] xl:text-[4.4vw] uppercase font-[font2] font-black tracking-wide origin-left scale-x-95 lg:scale-x-90 transform-[scaleY(1.35)] sm:transform-[scaleY(1.5)] lg:transform-[scaleY(1.7)] leading-[1.1] py-0.5 sm:py-1"
              >
                Experiences.
              </h2>
            </div>

            <p
              className="text-zinc-400 pr-4 py-4 sm:py-4 lg:py-[1.8vw] text-sm sm:text-base lg:text-[1.15vw] leading-relaxed font-[font1] mb-6 sm:mb-6 lg:mb-[2.5vw] max-w-xl"
            >
              Software Engineering student and Full-Stack Developer passionate
              about building scalable web applications, solving complex
              problems, and creating engaging digital experiences.
            </p>

            <div
              className="font-[font2] text-xs sm:text-sm lg:text-[1.3vw] flex flex-wrap items-center gap-2.5 sm:gap-4 lg:gap-[2vw]"
            >
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-zinc-300 border-zinc-400 border-[0.15vw] px-4 py-2 sm:px-8 sm:py-3 lg:px-[2vw] lg:py-[0.6vw] font-semibold leading-loose rounded-full hover:border-black hover:text-black hover:bg-zinc-100 flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
              >
                <span>My Works</span>
                <FiArrowDownRight className="ml-2 lg:ml-[0.8vw]" />
              </a>

              <a
                href="/Saptarshi CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 border-zinc-400 border-[0.15vw] px-4 py-2 sm:px-8 sm:py-3 lg:px-[2vw] lg:py-[0.6vw] font-semibold leading-loose rounded-full hover:border-zinc-100 hover:text-zinc-100 flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
              >
                <span>My Resume</span>
                <FiArrowUpRight className="ml-2 lg:ml-[0.8vw]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right profile image section (40% on desktop) with enlarged glowing Orb ring */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end items-center mt-2 mb-2 sm:my-6 lg:my-0 lg:mr-[1vw]">
          <div className="relative w-[76vw] h-[76vw] max-w-[340px] max-h-[340px] min-w-[270px] min-h-[270px] sm:w-88 sm:h-88 md:w-96 md:h-96 lg:w-[35vw] lg:h-[35vw] lg:max-w-[530px] lg:max-h-[530px] aspect-square flex items-center justify-center">
            {/* Enlarged Glowing Orb ring - scaled up so it doesn't overlap the image */}
            <div className="absolute inset-0 z-0 pointer-events-none scale-[125%] sm:scale-[122%] flex items-center justify-center">
              <Orb
                hoverIntensity={0}
                rotateOnHover={false}
                hue={0}
                forceHoverState={false}
                backgroundColor="#000000"
              />
            </div>

            {/* Profile image with circular mask comfortably inside the ring */}
            <img
              className="relative z-10 w-[84%] h-[84%] sm:w-[80%] sm:h-[80%] p-1 sm:p-2 lg:p-[0.8vw] grayscale-[75] brightness-80 opacity-80 contrast-130 object-cover select-none pointer-events-none rounded-full"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, black 62%, transparent 70%)",
                maskImage:
                  "radial-gradient(circle, black 62%, transparent 70%)",
              }}
              src="/profile pic.png"
              alt="Saptarshi Manna - Full-Stack Developer"
              width="530"
              height="530"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
