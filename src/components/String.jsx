import { useRef } from "react";
import gsap from "gsap";

const WIDTH = 1000;
const HEIGHT = 200;

const INITIAL_PATH = `M 0 ${HEIGHT / 2} Q ${WIDTH / 2} ${HEIGHT / 2} ${WIDTH} ${HEIGHT / 2}`;

const String = ({ className = "" }) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  const updatePath = (clientX, clientY) => {
    const svg = svgRef.current;
    if (!svg || !pathRef.current) return;

    // Convert pointer position to SVG coordinates
    const point = svg.createSVGPoint();
    point.x = clientX;
    point.y = clientY;

    const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());

    gsap.to(pathRef.current, {
      attr: {
        d: `M 0 ${HEIGHT / 2} Q ${svgPoint.x} ${svgPoint.y} ${WIDTH} ${HEIGHT / 2}`,
      },
      duration: 0.2,
      ease: "power3.out",
    });
  };

  const handleMove = (e) => {
    // Only animate string on desktop devices with fine pointer (mouse)
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine) and (min-width: 768px)").matches
    ) {
      return;
    }
    updatePath(e.clientX, e.clientY);
  };

  const handleLeave = () => {
    if (!pathRef.current) return;
    gsap.to(pathRef.current, {
      attr: {
        d: INITIAL_PATH,
      },
      duration: 2.5,
      ease: "elastic.out(2,0.01)",
    });
  };

  return (
    <>
      {/* Mobile View: Clean in-flow 2px white line matching the resting string */}
      <div
        data-scroll-reveal
        className={`block md:hidden w-full my-4 px-0.5 ${className}`}
        aria-hidden="true"
      >
        <div className="w-full h-[2px] bg-white rounded-full opacity-90 shadow-[0_0_8px_rgba(255,255,255,0.25)]" />
      </div>

      {/* Tablet & Desktop View: Interactive SVG string with physics / mouse pluck animation */}
      <div
        data-scroll-reveal
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`
          hidden
          md:block
          absolute
          sm:top-20
          lg:top-[5vw]
          left-0
          w-full
          h-30
          overflow-visible
          z-30
          pointer-events-auto
          ${className}
        `}
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          preserveAspectRatio="none"
          className="w-full h-full px-[2vw]"
        >
          <path
            ref={pathRef}
            d={INITIAL_PATH}
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </>
  );
};

export default String;
