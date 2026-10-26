import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  return (
    <article
      id={`project-${index}`}
      data-project-card
      className="min-h-0 lg:min-h-screen flex items-center py-8 lg:py-[6vw]"
      aria-label={`Project: ${project.title}`}
    >
      <div className="relative w-full">
        {/* Project Number */}
        <span
          data-scroll-reveal
          aria-hidden="true"
          className="absolute right-0 top-[-1.5rem] lg:right-[-1vw] lg:top-[-1.5vw] text-5xl sm:text-7xl lg:text-[9vw] font-black text-zinc-800 lg:text-zinc-700 leading-none pointer-events-none select-none"
        >
          0{index + 1}
        </span>

        {/* Year */}
        <p
          data-scroll-reveal
          className="uppercase tracking-widest text-zinc-300 font-medium text-xs sm:text-sm lg:text-[0.8vw] mb-2 lg:mb-[1vw]"
        >
          {project.year}
        </p>

        {/* Title */}
        <h2
          data-scroll-reveal
          className="font-[font2] text-zinc-100 text-2xl sm:text-3xl lg:text-[3.5vw] lg:leading-[3.5vw] max-w-full lg:max-w-[75%] font-bold"
        >
          {project.title}
        </h2>

        {/* Mobile Image Preview (< lg screens) wrapped in a browser-like frame */}
        {(() => {
          const mobileImg =
            project.mobileImage || (project.images && project.images[0]);
          if (!mobileImg) return null;

          const displayUrl = project.live
            ? project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")
            : `${project.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.app`;

          return (
            <div
              data-scroll-reveal
              className="block lg:hidden my-6 w-full rounded-2xl overflow-hidden border border-zinc-700/70 bg-zinc-900/90 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-800/90 border-b border-zinc-700/50 select-none">
                {/* Traffic Light Window Controls */}
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-sm" />
                </div>

                {/* Address Bar */}
                <div className="flex-1 mx-2 flex items-center justify-center">
                  <div className="w-full max-w-[210px] h-5 rounded-md bg-zinc-900/95 border border-zinc-700/50 flex items-center justify-center px-2 gap-1.5">
                    <svg
                      className="w-2.5 h-2.5 text-zinc-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span className="text-[10px] text-zinc-300 font-mono tracking-tight truncate">
                      {displayUrl}
                    </span>
                  </div>
                </div>

                {/* Subtle right-side window indicator dots */}
                <div
                  className="flex items-center gap-1 opacity-40"
                  aria-hidden="true"
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-300" />
                  <span className="w-1 h-1 rounded-full bg-zinc-300" />
                  <span className="w-1 h-1 rounded-full bg-zinc-300" />
                </div>
              </div>

              {/* Browser Content Area (AVIF with PNG fallback) */}
              <div className="relative w-full bg-zinc-950 overflow-hidden">
                <picture className="w-full h-auto block">
                  <source
                    type="image/avif"
                    srcSet={mobileImg.replace(/\.png$/, ".avif")}
                  />
                  <img
                    src={mobileImg}
                    alt={`${project.title} interface preview`}
                    width="1200"
                    height="640"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block aspect-[1200/640]"
                  />
                </picture>
              </div>
            </div>
          );
        })()}

        {/* Description */}
        <p
          data-scroll-reveal
          className="mt-4 lg:mt-[2vw] text-zinc-300 text-sm sm:text-base lg:text-[1vw] leading-relaxed lg:leading-[1.9vw] max-w-full lg:max-w-[85%]"
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div
          data-scroll-reveal
          className="flex flex-wrap gap-2 lg:gap-[0.8vw] mt-4 lg:mt-[2vw]"
          aria-label="Technologies used"
        >
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                text-zinc-300
                border-zinc-700
                px-3
                py-1
                lg:px-[1vw]
                lg:py-[0.45vw]
                text-xs
                lg:text-[0.8vw]
                uppercase
                tracking-wide
                transition-all
                duration-300
                hover:bg-zinc-100
                hover:border-zinc-100
                hover:text-black
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div
          data-scroll-reveal
          className="mt-6 lg:mt-[2vw] space-y-2 lg:space-y-[0.5vw]"
        >
          {project.highlights.slice(0, 4).map((item, i) => (
            <div key={i} className="flex items-start gap-3 lg:gap-[1vw]">
              <div
                className="h-2 w-2 lg:h-[0.45vw] lg:w-[0.45vw] rounded-full mt-2 lg:mt-[0.4vw] flex-shrink-0"
                style={{
                  background: project.accent || "#22C55E",
                }}
                aria-hidden="true"
              />
              <p className="text-zinc-300 text-xs sm:text-sm lg:text-[0.95vw] leading-normal">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Project Action CTAs */}
        <div
          data-scroll-reveal
          className="pt-6 lg:pt-[2vw] mt-6 lg:mt-[2vw] border-t border-zinc-800/80 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Explore live demo of ${project.title}`}
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                gap-2.5
                px-5
                py-2.5
                sm:px-6
                sm:py-3
                lg:px-[1.6vw]
                lg:py-[0.75vw]
                rounded-full
                bg-white
                text-zinc-950
                font-[font2]
                font-semibold
                text-xs
                sm:text-sm
                lg:text-[0.95vw]
                tracking-wide
                shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                hover:shadow-[0_6px_28px_rgba(255,255,255,0.25)]
                hover:bg-zinc-100
                active:scale-[0.97]
                transition-all
                duration-300
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:outline-none
              "
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Explore Project</span>
              <FiArrowUpRight className="text-sm lg:text-[1.1vw] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2.5
                px-4.5
                py-2.5
                sm:px-5
                sm:py-3
                lg:px-[1.4vw]
                lg:py-[0.75vw]
                rounded-full
                border
                border-zinc-700/80
                bg-zinc-900/70
                hover:bg-zinc-800/90
                hover:border-zinc-500
                text-zinc-200
                hover:text-white
                font-[font2]
                font-medium
                text-xs
                sm:text-sm
                lg:text-[0.95vw]
                tracking-wide
                backdrop-blur-md
                active:scale-[0.97]
                transition-all
                duration-300
                focus-visible:ring-2
                focus-visible:ring-zinc-400
                focus-visible:outline-none
              "
            >
              <FaGithub className="text-sm sm:text-base lg:text-[1.1vw] transition-transform duration-300 group-hover:scale-110" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
