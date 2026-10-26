import { forwardRef, useImperativeHandle, useRef } from "react";
import Stack from "./Stack";

const ProjectStack = forwardRef(({ project, active = false }, ref) => {
  const stackRef = useRef(null);

  useImperativeHandle(ref, () => ({
    nextCard() {
      stackRef.current?.nextCard();
    },

    reset() {
      stackRef.current?.reset();
    },
  }));

  const cards = project.images.map((image, index) => (
    <picture key={index} className="w-full h-full block">
      <source type="image/avif" srcSet={image.replace(/\.png$/, ".avif")} />
      <img
        src={image}
        alt={`${project.title} screenshot ${index + 1}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain pointer-events-none select-none rounded-xl"
        draggable={false}
      />
    </picture>
  ));

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-[92%] max-w-[48vw] aspect-[1.87/1]">
        {/* Background Title (Decorative Watermark) */}
        <div className="absolute inset-0 flex items-center justify-center-safe pointer-events-none select-none z-0" aria-hidden="true">
          <span
            className="text-[12vw] font-black uppercase text-white/3 leading-relaxed text-center"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.20)",
            }}
          >
            {project.bgTitle || project.title}
          </span>
        </div>

        {/* Stack */}
        <div className="relative z-10 w-full h-full">
          <Stack
            ref={stackRef}
            cards={cards}
            autoplay
            autoplayDelay={2500}
            pauseOnHover
            sendToBackOnClick
          />
        </div>
      </div>
    </div>
  );
});

export default ProjectStack;
