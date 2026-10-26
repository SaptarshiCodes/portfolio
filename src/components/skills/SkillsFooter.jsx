import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiVite,
  SiNpm,
} from "react-icons/si";

import { FaCss3Alt, FaJava } from "react-icons/fa";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const skills = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "Java", Icon: FaJava, color: "#ED8B00" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Socket.IO", Icon: SiSocketdotio, color: "#FFFFFF" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "npm", Icon: SiNpm, color: "#CB3837" },
];

const SkillsFooter = () => {
  const tween = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    tween.current = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        tween.current?.play();
      } else {
        tween.current?.pause();
      }
    });

    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    return () => observer.disconnect();
  });

  return (
    <div>
      <h3 className="text-xl sm:text-2xl lg:text-[2vw] font-bold uppercase font-[font2] tracking-normal sm:tracking-normal lg:tracking-wider text-zinc-300 mt-8 sm:mt-12 lg:mt-[4vw]">
        Technologies I work with
      </h3>
      <div className="overflow-hidden pt-4 sm:pt-6 lg:pt-[2.5vw]">
        <div ref={trackRef} className="flex w-max">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="group relative mx-4 sm:mx-6 lg:mx-[2.5vw] flex items-center justify-center"
              onMouseEnter={(e) => {
                if (
                  typeof window !== "undefined" &&
                  (window.innerWidth < 1024 ||
                    (window.matchMedia &&
                      !window.matchMedia("(hover: hover)").matches))
                ) {
                  return;
                }

                gsap.to(e.currentTarget.querySelector(".icon"), {
                  scale: 1.25,
                  duration: 0.3,
                  ease: "back.out(1.7)",
                });

                gsap.to(tween.current, {
                  timeScale: 0.3,
                  duration: 0.5,
                });
              }}
              onMouseLeave={(e) => {
                if (
                  typeof window !== "undefined" &&
                  (window.innerWidth < 1024 ||
                    (window.matchMedia &&
                      !window.matchMedia("(hover: hover)").matches))
                ) {
                  return;
                }

                gsap.to(e.currentTarget.querySelector(".icon"), {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out",
                });

                gsap.to(tween.current, {
                  timeScale: 1,
                  duration: 0.5,
                });
              }}
            >
              <div className="icon">
                <skill.Icon
                  className="w-10 h-10 sm:w-14 sm:h-14 lg:w-[4.8vw] lg:h-[4.8vw] flex-shrink-0 p-1 sm:p-2 lg:p-[0.7vw] skill-tech-icon"
                  style={{ "--brand-color": skill.color }}
                  aria-label={skill.name}
                />
              </div>

              <div
                className="
                  hidden
                  lg:block
                  absolute
                  lg:top-[-2vw]
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  bg-zinc-900
                  border
                  border-zinc-700/80
                  px-3
                  py-1
                  text-xs
                  sm:text-sm
                  whitespace-nowrap
                  opacity-0
                  text-white
                  z-50
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:-translate-y-1
                  pointer-events-none
                "
              >
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsFooter;
