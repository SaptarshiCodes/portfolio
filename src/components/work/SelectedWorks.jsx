import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectGallery from "./ProjectGallery";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

gsap.registerPlugin(ScrollTrigger);

const SelectedWorks = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const galleryRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Pinned side-by-side gallery only on desktop viewports (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: pinRef.current,
          start: "center center",
          endTrigger: sectionRef.current,
          end: "bottom-=80 bottom",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        const projectCards = gsap.utils.toArray("[data-project-card]");

        projectCards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top center",
            end: "bottom center",

            onEnter: () => {
              galleryRef.current?.showProject(index);
            },

            onEnterBack: () => {
              galleryRef.current?.showProject(index);
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden pt-6 sm:pt-10 lg:pt-[3vw] px-4 sm:px-6 lg:px-[1vw]"
      aria-label="Selected Works"
    >
      <h2 data-scroll-reveal className="text-zinc-100 text-3xl sm:text-4xl lg:text-[3.5vw] font-[font2] font-bold tracking-wide">
        Selected Works
      </h2>

      <div data-scroll-reveal className="my-4 lg:my-[1.5vw] flex justify-between items-end">
        <p className="text-zinc-400 font-[font1] font-light text-sm sm:text-base lg:text-[1.2vw] leading-relaxed">
          A collection of projects that define my journey
          <br className="hidden sm:inline" /> in digital product creation.
        </p>

        <span className="text-zinc-400 font-[font2] text-sm sm:text-base lg:text-[1.5vw] tabular-nums">
          (0{projects.length})
        </span>
      </div>

      <div className="w-full h-px bg-zinc-800" />

      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Desktop pinned gallery (hidden on mobile/tablet to avoid overflow) */}
        <div className="hidden lg:block lg:w-[52%]">
          <div
            ref={pinRef}
            className="h-screen flex justify-center items-center"
          >
            <ProjectGallery ref={galleryRef} projects={projects} />
          </div>
        </div>

        {/* Project cards: full width on mobile, 42% on desktop */}
        <div className="w-full lg:w-[42%]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
